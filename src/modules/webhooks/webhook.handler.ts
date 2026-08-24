// src/modules/webhooks/webhook.handler.ts

import { Request, Response } from "express";
import prisma from "../../config/database";
import {
  BolnaDataSection,
  BolnaExtractedData,
  ParsedCallAnalysis,
} from "../../types/bolna.types";

// ─── Bolna Webhook Payload Shape ──────────────────────────────────────────────

interface BolnaTelephonyData {
  duration: number;
  recording_url: string;
  to_number: string;
  from_number: string;
  hangup_reason?: string | null;
  hangup_by?: string | null;
  hangup_provider_code?: string | null;
}

interface BolnaMessage {
  role: "agent" | "user";
  content: string;
  created_at?: string;
}

interface BolnaWebhookPayload {
  id?: string;
  execution_id?: string;
  run_id?: string;
  agent_id?: string;
  status:
    | "completed"
    | "failed"
    | "no-answer"
    | "busy"
    | "in-progress"
    | "initiated"
    | "queued"
    | "ringing"
    | "in_progress"
    | "answered"
    | "ended"
    | "no_answer"
    | "call_completed"
    | "error";
  transcript?: string | null;
  summary?: string | null;
  conversation_duration?: number;
  total_cost?: number;
  error_message?: string | null;
  extracted_data?: BolnaExtractedData | null;
  telephony_data?: BolnaTelephonyData;
  context_details?: {
    recipient_data: Record<string, string>;
    recipient_phone_number: string;
  };
  recording_url?: string;
  duration?: number;
  messages?: BolnaMessage[];
  ended_reason?: string;
  user_data?: Record<string, string>;
}

// ─── Resolve Helpers ──────────────────────────────────────────────────────────

function resolveCallId(payload: BolnaWebhookPayload): string | null {
  return payload.id ?? payload.execution_id ?? payload.run_id ?? null;
}

function resolveRecordingUrl(payload: BolnaWebhookPayload): string | null {
  return payload.telephony_data?.recording_url ?? payload.recording_url ?? null;
}

function resolveDuration(payload: BolnaWebhookPayload): number | null {
  return (
    payload.telephony_data?.duration ??
    payload.conversation_duration ??
    payload.duration ??
    null
  );
}

// ─── Allowed enum values — must match schema exactly ─────────────────────────

const DISPOSITION_VALUES = [
  "INTERESTED_SEND_DETAILS",
  "QUALIFIED_CONSULTANT_FOLLOWUP",
  "SITE_VISIT_INTEREST",
  "INTERESTED_GENERAL",
  "FOLLOWUP_REQUESTED",
  "NOT_INTERESTED",
  "DO_NOT_CALL",
  "WRONG_NUMBER",
  "ALREADY_PURCHASED",
  "BROKER",
  "LANGUAGE_CALLBACK_REQUIRED",
  "CALL_ENDED_BY_CUSTOMER",
  "CALL_ENDED_ABUSIVE",
  "NO_RESPONSE",
  "CALL_DROPPED",
] as const;

const LEAD_TEMPERATURE_VALUES = [
  "HOT",
  "WARM",
  "NURTURE",
  "COLD",
  "NOT_APPLICABLE",
] as const;

const QUALIFIED_TEMPERATURES = new Set(["HOT", "WARM"]);

const PURCHASE_TIMELINE_VALUES = [
  "WITHIN_3_MONTHS",
  "WITHIN_6_MONTHS",
  "WITHIN_1_YEAR",
  "AFTER_1_YEAR",
  "FLEXIBLE",
  "NOT_SHARED",
] as const;

const PURCHASE_PURPOSE_VALUES = [
  "OWN_USE",
  "INVESTMENT",
  "BOTH",
  "NOT_SHARED",
] as const;

const PREFERRED_NEXT_ACTION_VALUES = [
  "SEND_DETAILS",
  "CONSULTANT_CALL",
  "SITE_VISIT",
  "FOLLOWUP_CALL",
  "NONE",
] as const;

const CONTACT_CHANNEL_VALUES = ["WHATSAPP", "EMAIL", "NOT_ASKED"] as const;

const LOCATION_MATCH_VALUES = [
  "MATCH",
  "MISMATCH",
  "NOT_ASKED",
  "NOT_MENTIONED",
] as const;

const EXTRACTION_FLAG_VALUES = ["YES", "NO"] as const;

// ─── Enum Sanitizer ───────────────────────────────────────────────────────────
// Validates that a raw string value from Bolna extraction belongs to an
// allowed set. Returns null if value is absent or not in the allowed set.
// This prevents Prisma validation errors from unexpected AI-generated values.

function sanitizeEnum<T extends string>(
  value: string | null | undefined,
  allowed: readonly T[],
): T | null {
  if (!value) return null;
  const upper = value.trim().toUpperCase() as T;
  return (allowed as readonly string[]).includes(upper) ? upper : null;
}

// ─── Main Handler (CHANGED: queued/initiated case) ──────────────────────────

export const handleBolnaWebhook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  res.json({ received: true });

  const payload = req.body as BolnaWebhookPayload;
  const callId = resolveCallId(payload);

  console.log(
    `[Webhook] Bolna event | status: ${payload.status} | id: ${callId}`,
  );

  if (!callId) {
    console.warn("[Webhook] No call ID resolved from payload — skipping");
    console.warn("[Webhook] Payload keys:", Object.keys(payload));
    return;
  }

  try {
    switch (payload.status) {
      case "queued":
      case "initiated": {
        await prisma.call.updateMany({
          where: { bolnaCallId: callId },
          data: { status: "CALLING", startedAt: new Date() },
        });

        // ── NEW: Transition SCHEDULED → RUNNING on first Bolna call ──────
        // When Bolna fires a scheduled call, the webhook tells us the
        // campaign is now actively running.
        const call = await prisma.call.findFirst({
          where: { bolnaCallId: callId },
          select: { campaignId: true },
        });
        if (call) {
          await prisma.campaign.updateMany({
            where: { id: call.campaignId, status: "SCHEDULED" },
            data: { status: "RUNNING", startedAt: new Date() },
          });
        }

        console.log(`[Webhook] Queued/initiated: ${callId}`);
        break;
      }

      case "ringing": {
        console.log(`[Webhook] Ringing: ${callId}`);
        break;
      }

      case "in-progress":
      case "in_progress":
      case "answered": {
        await prisma.call.updateMany({
          where: { bolnaCallId: callId },
          data: { status: "CALLING" },
        });
        console.log(`[Webhook] In progress: ${callId}`);
        break;
      }

      case "completed":
      case "ended":
      case "call_completed": {
        await handleCallCompleted(callId, payload);
        break;
      }

      case "no-answer":
      case "no_answer": {
        await handleCallNoAnswer(callId);
        break;
      }

      case "busy": {
        await handleCallBusy(callId);
        break;
      }

      case "failed":
      case "error": {
        await handleCallFailed(callId, payload.error_message);
        break;
      }

      default:
        console.log(
          `[Webhook] Unhandled status: "${payload.status}" | id: ${callId}`,
        );
    }
  } catch (error) {
    console.error("[Webhook] Error processing event:", error);
  }
};

// ─── Completed (CHANGED: added scheduled campaign completion detection) ─────

async function handleCallCompleted(
  callId: string,
  payload: BolnaWebhookPayload,
) {
  const call = await prisma.call.findFirst({
    where: { bolnaCallId: callId },
  });

  if (!call) {
    console.warn(`[Webhook] Call record not found for: ${callId}`);
    return;
  }

  const normalizedMessages = (payload.messages ?? [])
    .filter((m) => m.role === "agent" || m.role === "user")
    .map((m) => ({
      role: m.role === "agent" ? "assistant" : "user",
      message: m.content ?? "",
      time: m.created_at ?? null,
    }));

  const transcriptText =
    payload.transcript ||
    normalizedMessages
      .map((m) => `${m.role === "assistant" ? "Agent" : "Lead"}: ${m.message}`)
      .join("\n") ||
    null;

  const parsed = parseExtractionData(payload.extracted_data ?? null);
  const callSummary = parsed?.callSummary ?? null;
  const duration = resolveDuration(payload);
  const recording = resolveRecordingUrl(payload);
  const cost = payload.total_cost ?? null;

  const hangupReason = payload.telephony_data?.hangup_reason ?? null;
  const callStatus =
    hangupReason === "customer-busy" ? "NO_ANSWER" : "COMPLETED";

  console.log(
    `[Webhook] Completed: ${callId} | duration: ${duration}s | cost: ${payload.total_cost} | hasExtraction: ${!!parsed}`,
  );

  await prisma.call.update({
    where: { id: call.id },
    data: {
      status: callStatus as any,
      summary: callSummary,
      transcript: transcriptText,
      transcriptMessages:
        normalizedMessages.length > 0 ? normalizedMessages : undefined,
      duration,
      recording,
      cost,
      endedAt: new Date(),
    },
  });

  await prisma.lead.update({
    where: { id: call.leadId },
    data: { status: "CALLED" },
  });

  if (parsed) {
    await saveCallAnalysis(call.id, call.tenantId, parsed);

    if (parsed.doNotCall === "YES") {
      await prisma.lead.update({
        where: { id: call.leadId },
        data: { doNotCall: true },
      });
      console.log(`[Webhook] Do-not-call flagged for lead: ${call.leadId}`);
    }
  }

  const leadTemp = parsed?.leadTemperature?.toUpperCase()?.trim();
  const isQualified = leadTemp ? QUALIFIED_TEMPERATURES.has(leadTemp) : false;

  await prisma.campaign.update({
    where: { id: call.campaignId },
    data: {
      calledLeads: { increment: 1 },
      ...(isQualified && { successLeads: { increment: 1 } }),
    },
  });

  // Check completion for scheduled campaigns
  await checkScheduledCampaignCompletion(call.campaignId);
}

// ─── No Answer ────────────────────────────────────────────────────────────────
async function handleCallNoAnswer(callId: string) {
  const call = await prisma.call.findFirst({
    where: { bolnaCallId: callId },
  });
  if (!call) {
    console.warn(`[Webhook] Call not found for no-answer: ${callId}`);
    return;
  }

  await prisma.campaign.update({
    where: { id: call.campaignId },
    data: {
      calledLeads: { increment: 1 },
    },
  });

  await prisma.call.update({
    where: { id: call.id },
    data: { status: "NO_ANSWER", endedAt: new Date() },
  });

  await prisma.lead.update({
    where: { id: call.leadId },
    data: { status: "NO_ANSWER" },
  });

  console.log(`[Webhook] No answer: ${callId}`);
  await checkScheduledCampaignCompletion(call.campaignId);
}

// ─── Busy ─────────────────────────────────────────────────────────────────────
async function handleCallBusy(callId: string) {
  const call = await prisma.call.findFirst({
    where: { bolnaCallId: callId },
  });
  if (!call) {
    console.warn(`[Webhook] Call not found for busy: ${callId}`);
    return;
  }

  await prisma.campaign.update({
    where: { id: call.campaignId },
    data: {
      calledLeads: { increment: 1 },
    },
  });

  await prisma.call.update({
    where: { id: call.id },
    data: { status: "BUSY", endedAt: new Date() },
  });

  await prisma.lead.update({
    where: { id: call.leadId },
    data: { status: "NO_ANSWER" },
  });

  console.log(`[Webhook] Busy: ${callId}`);
  await checkScheduledCampaignCompletion(call.campaignId);
}

// ─── Failed ───────────────────────────────────────────────────────────────────
async function handleCallFailed(callId: string, errorMessage?: string | null) {
  const call = await prisma.call.findFirst({
    where: { bolnaCallId: callId },
  });
  if (!call) {
    console.warn(`[Webhook] Call not found for failed: ${callId}`);
    return;
  }

  console.error(
    `[Webhook] Call failed: ${callId} | reason: ${errorMessage ?? "unknown"}`,
  );

  await prisma.call.update({
    where: { id: call.id },
    data: { status: "FAILED", endedAt: new Date() },
  });

  await prisma.lead.update({
    where: { id: call.leadId },
    data: { status: "FAILED" },
  });

  await prisma.campaign.update({
    where: { id: call.campaignId },
    data: { failedLeads: { increment: 1 } },
  });

  await checkScheduledCampaignCompletion(call.campaignId);
}

// ─── Scheduled Campaign Completion Check ─────────────────────────────────────
async function checkScheduledCampaignCompletion(
  campaignId: string,
): Promise<void> {
  const campaign = await prisma.campaign.findUnique({
    where: { id: campaignId },
    select: { status: true, scheduledAt: true },
  });

  if (!campaign || !campaign.scheduledAt || campaign.status !== "RUNNING") {
    return;
  }

  const activeLeads = await prisma.lead.count({
    where: {
      campaignId,
      status: { in: ["PENDING", "CALLING"] },
    },
  });

  if (activeLeads === 0) {
    await prisma.campaign.update({
      where: { id: campaignId },
      data: { status: "COMPLETED", completedAt: new Date() },
    });
    console.log(
      `[Webhook] Scheduled campaign ${campaignId} — all calls completed → COMPLETED`,
    );
  }
}

// ─── Parse Extraction Data ────────────────────────────────────────────────────
// Returns null if extracted_data is absent or has no usable fields.
// This prevents empty CallAnalysis records from being created.
function parseExtractionData(
  extracted: BolnaExtractedData | null,
): ParsedCallAnalysis | null {
  if (!extracted || typeof extracted !== "object") return null;

  // ── Safe field readers ────────────────────────────────────────────────────
  const obj = (field?: { objective?: string | null }): string | null =>
    field?.objective?.trim() ?? null;

  const subj = (field?: { subjective?: string | null }): string | null =>
    field?.subjective?.trim() ?? null;

  // ── Extract groups ────────────────────────────────────────────────────────
  const outcome = extracted["Call Outcome"];
  const qualification = extracted["Lead Qualification"];
  const nextAction = extracted["Next Action and Contact Preference"];
  const followUp = extracted["Follow-Up Schedule"];
  const compliance = extracted["Compliance"];
  const summary = extracted["Summary"];

  const parsed: ParsedCallAnalysis = {
    // ── Enums — all sanitized ───────────────────────────────────────────────
    disposition: sanitizeEnum(obj(outcome?.disposition), DISPOSITION_VALUES),
    leadTemperature: sanitizeEnum(
      obj(outcome?.lead_temperature),
      LEAD_TEMPERATURE_VALUES,
    ),
    purchaseTimeline: sanitizeEnum(
      obj(qualification?.purchase_timeline),
      PURCHASE_TIMELINE_VALUES,
    ),
    purchasePurpose: sanitizeEnum(
      obj(qualification?.purchase_purpose),
      PURCHASE_PURPOSE_VALUES,
    ),
    locationMatch: sanitizeEnum(
      obj(qualification?.location_match),
      LOCATION_MATCH_VALUES,
    ),
    preferredNextAction: sanitizeEnum(
      obj(nextAction?.preferred_next_action),
      PREFERRED_NEXT_ACTION_VALUES,
    ),
    preferredContactChannel: sanitizeEnum(
      obj(nextAction?.preferred_contact_channel),
      CONTACT_CHANNEL_VALUES,
    ),
    doNotCall: sanitizeEnum(
      obj(compliance?.do_not_call),
      EXTRACTION_FLAG_VALUES,
    ),
    languageSupportRequired: sanitizeEnum(
      obj(compliance?.language_support_required),
      EXTRACTION_FLAG_VALUES,
    ),

    // ── Free text — no sanitization needed ─────────────────────────────────
    preferredConfiguration: subj(qualification?.preferred_configuration),
    budgetRange: subj(qualification?.budget_range),
    customerLocationPref: subj(qualification?.customer_location_pref),
    followupSchedule: subj(followUp?.followup_schedule),
    callSummary: subj(summary?.call_summary),
  };

  // ── If every field is null nothing is worth saving ────────────────────────
  const hasAnyValue = Object.values(parsed).some((v) => v !== null);
  if (!hasAnyValue) {
    console.warn(
      "[Webhook] Extraction data present but all fields null — skipping CallAnalysis",
    );
    return null;
  }

  // ── Log any enum fields that were sanitized to null ───────────────────────
  // Helps identify new unexpected values Bolna AI starts returning
  const enumFields = [
    "disposition",
    "leadTemperature",
    "purchaseTimeline",
    "purchasePurpose",
    "locationMatch",
    "preferredNextAction",
    "preferredContactChannel",
    "doNotCall",
    "languageSupportRequired",
  ] as const;

  for (const field of enumFields) {
    const raw = parsed[field];
    if (raw === null) {
      console.warn(
        `[Webhook] Enum field "${field}" was null after sanitization — Bolna returned an unexpected value`,
      );
    }
  }

  return parsed;
}

// ─── Save Call Analysis ───────────────────────────────────────────────────────

async function saveCallAnalysis(
  callId: string,
  tenantId: string,
  parsed: ParsedCallAnalysis,
): Promise<void> {
  try {
    await prisma.callAnalysis.create({
      data: {
        callId,
        tenantId,
        disposition: (parsed.disposition as any) ?? null,
        leadTemperature: (parsed.leadTemperature as any) ?? null,
        preferredConfiguration: parsed.preferredConfiguration,
        budgetRange: parsed.budgetRange,
        purchaseTimeline: (parsed.purchaseTimeline as any) ?? null,
        purchasePurpose: (parsed.purchasePurpose as any) ?? null,
        locationMatch: (parsed.locationMatch as any) ?? null,
        customerLocationPref: parsed.customerLocationPref,
        preferredNextAction: (parsed.preferredNextAction as any) ?? null,
        preferredContactChannel:
          (parsed.preferredContactChannel as any) ?? null,
        followupSchedule: parsed.followupSchedule,
        doNotCall: (parsed.doNotCall as any) ?? null,
        languageSupportRequired:
          (parsed.languageSupportRequired as any) ?? null,
      },
    });
    console.log(`[Webhook] CallAnalysis saved for call: ${callId}`);
  } catch (error) {
    // Log but don't throw — call record is already saved, analysis failure
    // should not break the webhook response chain
    console.error(
      `[Webhook] Failed to save CallAnalysis for call ${callId}:`,
      error,
    );
  }
}

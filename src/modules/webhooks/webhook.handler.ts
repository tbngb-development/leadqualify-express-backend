import { Request, Response } from "express";
import prisma from "../../config/database";
import {
  BolnaDataSection,
  BolnaExtractedData,
  ParsedCallAnalysis,
  CallHistoryItem,
} from "../../types/bolna.types";

// ─── Bolna Webhook Payload Shape (V1 Extended) ───────────────────────────────

interface BolnaTelephonyData {
  duration: number | string;
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

interface BolnaBatchRunDetails {
  status: string;
  created_at: string;
  updated_at: string;
  retried: number; // 0 = first attempt, 1+ = retry
}

interface BolnaWebhookPayload {
  id?: string;
  execution_id?: string;
  run_id?: string;
  agent_id?: string;
  batch_id?: string; // V1: Bolna's 32-char hex batch ID (present for batch calls)
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
    | "error"
    | "stopped"
    | "canceled"
    | "balance-low"
    | "call-disconnected"
    | "scheduled"
    | "rescheduled";
  transcript?: string | null;
  summary?: string | null;
  conversation_duration?: number;
  total_cost?: number;
  error_message?: string | null;
  extracted_data?: BolnaExtractedData | null;
  telephony_data?: BolnaTelephonyData;
  context_details?: {
    recipient_data?: Record<string, string>;
    recipient_phone_number?: string;
  };
  recording_url?: string;
  duration?: number;
  messages?: BolnaMessage[];
  ended_reason?: string;
  user_data?: Record<string, string>;
  batch_run_details?: BolnaBatchRunDetails; // V1: retry tracking
  answered_by_voice_mail?: boolean;
}

// ─── Resolve Helpers ──────────────────────────────────────────────────────────

function resolveCallId(payload: BolnaWebhookPayload): string | null {
  return payload.id ?? payload.execution_id ?? payload.run_id ?? null;
}

function resolveRecordingUrl(payload: BolnaWebhookPayload): string | null {
  return payload.telephony_data?.recording_url ?? payload.recording_url ?? null;
}

function resolveDuration(payload: BolnaWebhookPayload): number | null {
  const raw =
    payload.telephony_data?.duration ??
    payload.conversation_duration ??
    payload.duration ??
    null;

  if (raw === null) return null;
  return typeof raw === "string" ? parseInt(raw, 10) || null : raw;
}

function resolvePhone(payload: BolnaWebhookPayload): string | null {
  return (
    payload.telephony_data?.to_number ??
    payload.context_details?.recipient_phone_number ??
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

function sanitizeEnum<T extends string>(
  value: string | null | undefined,
  allowed: readonly T[],
): T | null {
  if (!value) return null;
  const upper = value.trim().toUpperCase() as T;
  return (allowed as readonly string[]).includes(upper) ? upper : null;
}

// ─── V1: Call Record Resolution ──────────────────────────────────────────────
/**
 * Finds or creates the Call record for a webhook event.
 *
 * Resolution order:
 *   1. Match by bolnaCallId (MVP pre-created calls + previous batch attempts)
 *   2. Match by batch_id + phone (V1 batch calls — first webhook for this lead)
 *   3. Handle retry: if Call exists and retried > 0, append to callHistory
 *   4. Create new Call if no match found (V1 batch first-attempt)
 */
async function resolveCallRecord(
  callId: string,
  payload: BolnaWebhookPayload,
): Promise<{
  call: any;
  isNew: boolean;
  isRetry: boolean;
} | null> {
  // ── Step 1: Try matching by bolnaCallId (MVP flow + existing batch calls) ──
  let call = await prisma.call.findFirst({
    where: { bolnaCallId: callId },
  });

  if (call) {
    return { call, isNew: false, isRetry: false };
  }

  // ── Step 2: V1 Batch correlation — match by batch_id + phone ──────────────
  const bolnaBatchId = payload.batch_id;
  const phone = resolvePhone(payload);
  const retried = payload.batch_run_details?.retried ?? 0;

  if (!bolnaBatchId || !phone) {
    // No batch context and no pre-existing call — cannot resolve
    console.warn(
      `[Webhook] Cannot resolve call: no bolnaCallId match, no batch_id, or no phone | callId: ${callId}`,
    );
    return null;
  }

  // Find our LeadBatch by Bolna's batch_id
  const leadBatch = await prisma.leadBatch.findFirst({
    where: { bolnaBatchId },
  });

  if (!leadBatch) {
    console.warn(
      `[Webhook] LeadBatch not found for bolnaBatchId: ${bolnaBatchId}`,
    );
    return null;
  }

  // Find Lead by phone + batch
  const lead = await prisma.lead.findFirst({
    where: {
      phone,
      batchId: leadBatch.id,
    },
  });

  if (!lead) {
    // Fallback: try matching by phone + campaign (cross-batch edge case)
    const fallbackLead = await prisma.lead.findFirst({
      where: {
        phone,
        campaignId: leadBatch.campaignId,
      },
    });

    if (!fallbackLead) {
      console.warn(
        `[Webhook] Lead not found for phone: ${phone} in batch: ${leadBatch.id}`,
      );
      return null;
    }

    // Use fallback lead but log the mismatch
    console.warn(
      `[Webhook] Lead matched via campaign fallback (phone: ${phone}, batch: ${leadBatch.id})`,
    );

    return createOrResolveCallForLead(
      fallbackLead,
      leadBatch,
      callId,
      payload,
      retried,
    );
  }

  return createOrResolveCallForLead(lead, leadBatch, callId, payload, retried);
}

/**
 * Creates a new Call record or handles retry for an existing one.
 */
async function createOrResolveCallForLead(
  lead: any,
  leadBatch: any,
  callId: string,
  payload: BolnaWebhookPayload,
  retried: number,
): Promise<{ call: any; isNew: boolean; isRetry: boolean }> {
  // Check if a Call record already exists for this lead + batch
  const existingCall = await prisma.call.findFirst({
    where: {
      leadId: lead.id,
      batchId: leadBatch.id,
    },
    orderBy: { createdAt: "desc" },
  });

  if (existingCall && retried > 0) {
    // ── RETRY: Append previous attempt to callHistory, update bolnaCallId ──
    const rawHistory = existingCall.callHistory;
    const history: CallHistoryItem[] = Array.isArray(rawHistory)
      ? (rawHistory as any)
      : [];

    // Save the PREVIOUS attempt's state before overwriting
    history.push({
      attempt: retried,
      bolnaCallId: existingCall.bolnaCallId ?? callId,
      status: existingCall.status,
      duration: existingCall.duration,
      cost: existingCall.cost,
      timestamp:
        existingCall.updatedAt?.toISOString() ?? new Date().toISOString(),
      errorMessage: null,
    });

    const updatedCall = await prisma.call.update({
      where: { id: existingCall.id },
      data: {
        bolnaCallId: callId, // Latest execution_id
        callHistory: history as any, // Cast to any to bypass strict Prisma Json verification
        status: "CALLING", // Reset to CALLING for new attempt
      },
    });

    console.log(
      `[Webhook] Retry attempt #${retried} for lead ${lead.id} | new execution: ${callId}`,
    );

    return { call: updatedCall, isNew: false, isRetry: true };
  }

  if (existingCall && retried === 0) {
    // Same execution, just a different webhook event (e.g., queued → in-progress)
    return { call: existingCall, isNew: false, isRetry: false };
  }

  // ── NEW CALL: First webhook for this lead in this batch ───────────────────
  const newCall = await prisma.call.create({
    data: {
      bolnaCallId: callId,
      tenantId: leadBatch.tenantId,
      campaignId: leadBatch.campaignId,
      leadId: lead.id,
      batchId: leadBatch.id,
      status: "CALLING",
      startedAt: new Date(),
    },
  });

  // Update lead status
  await prisma.lead.update({
    where: { id: lead.id },
    data: { status: "CALLING" },
  });

  console.log(
    `[Webhook] New Call created for batch lead | call: ${newCall.id} | lead: ${lead.id} | execution: ${callId}`,
  );

  return { call: newCall, isNew: true, isRetry: false };
}

// ─── Main Handler ─────────────────────────────────────────────────────────────

export const handleBolnaWebhook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  res.json({ received: true });

  const payload = req.body as BolnaWebhookPayload;
  const callId = resolveCallId(payload);

  console.log(
    `[Webhook] Bolna event | status: ${payload.status} | id: ${callId} | batch: ${payload.batch_id ?? "none"} | retried: ${payload.batch_run_details?.retried ?? 0}`,
  );

  if (!callId) {
    console.warn("[Webhook] No call ID resolved from payload — skipping");
    return;
  }

  try {
    // Replace the status switch block inside handleBolnaWebhook in webhook.handler.ts:

    switch (payload.status) {
      case "queued":
      case "scheduled":
      case "rescheduled": {
        // Option A: Do NOT create a Call record on queued/scheduled.
        // Wait for initiated or ringing to start tracking.
        console.log(
          `[Webhook] Queued/scheduled event ignored (Option A): ${callId}`,
        );
        break;
      }

      case "initiated":
      case "ringing":
      case "in-progress":
      case "in_progress":
      case "answered": {
        const resolved = await resolveCallRecord(callId, payload);
        if (!resolved) break;

        await prisma.call.update({
          where: { id: resolved.call.id },
          data: { status: "CALLING", startedAt: new Date() },
        });

        if (resolved.call.batchId) {
          await prisma.leadBatch.updateMany({
            where: { id: resolved.call.batchId, status: "SCHEDULED" },
            data: { status: "RUNNING", startedAt: new Date() },
          });
        }

        await prisma.campaign.updateMany({
          where: { id: resolved.call.campaignId, status: "DRAFT" },
          data: { status: "RUNNING", startedAt: new Date() },
        });

        console.log(`[Webhook] Active calling state: ${callId}`);
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
        await handleCallTerminal(callId, payload, "NO_ANSWER");
        break;
      }

      case "busy": {
        await handleCallTerminal(callId, payload, "BUSY");
        break;
      }

      case "failed":
      case "error":
      case "balance-low": {
        await handleCallTerminal(callId, payload, "FAILED");
        break;
      }

      case "stopped":
      case "canceled": {
        await handleCallCanceled(callId, payload);
        break;
      }

      default:
        console.log(
          `[Webhook] Unhandled status: "${payload.status}" | id: ${callId}`,
        );
    }

    // ── Add handleCallCanceled Helper ──────────────────────────────────────────────

    async function handleCallCanceled(
      callId: string,
      payload: BolnaWebhookPayload,
    ) {
      const resolved = await resolveCallRecord(callId, payload);
      if (!resolved) return;
      const { call } = resolved;

      console.log(`[Webhook] Call canceled/stopped by platform: ${callId}`);

      await prisma.call.update({
        where: { id: call.id },
        data: { status: "FAILED", endedAt: new Date() },
      });

      // Revert Lead back to PENDING so it can be resumed
      await prisma.lead.update({
        where: { id: call.leadId },
        data: { status: "PENDING" },
      });

      await checkBatchAndCampaignCompletion(call);
    }
  } catch (error) {
    console.error("[Webhook] Error processing event:", error);
  }
};

// ─── Completed Handler ────────────────────────────────────────────────────────

async function handleCallCompleted(
  callId: string,
  payload: BolnaWebhookPayload,
) {
  const resolved = await resolveCallRecord(callId, payload);
  if (!resolved) {
    console.warn(`[Webhook] Call record not found for completed: ${callId}`);
    return;
  }

  const { call } = resolved;

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
    `[Webhook] Completed: ${callId} | duration: ${duration}s | cost: ${cost} | hasExtraction: ${!!parsed} | retry: ${resolved.isRetry}`,
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

  // V1: Dual stat increment (batch + campaign)
  const leadTemp = parsed?.leadTemperature?.toUpperCase()?.trim();
  const isQualified = leadTemp ? QUALIFIED_TEMPERATURES.has(leadTemp) : false;

  await incrementTerminalStats(call, "COMPLETED", isQualified);

  // V1: Check batch + campaign completion
  await checkBatchAndCampaignCompletion(call);
}

// ─── Unified Terminal Handler (no-answer, busy, failed) ──────────────────────

async function handleCallTerminal(
  callId: string,
  payload: BolnaWebhookPayload,
  terminalStatus: "NO_ANSWER" | "BUSY" | "FAILED",
) {
  const resolved = await resolveCallRecord(callId, payload);
  if (!resolved) {
    console.warn(`[Webhook] Call not found for ${terminalStatus}: ${callId}`);
    return;
  }

  const { call } = resolved;

  console.log(
    `[Webhook] ${terminalStatus}: ${callId} | lead: ${call.leadId} | retry: ${resolved.isRetry}`,
  );

  // If this is a retry attempt and the call is still going to be retried by Bolna,
  // we DON'T mark it as terminal yet. We just log the attempt in callHistory.
  // Bolna's auto-retry will fire another webhook with the next execution_id.
  // The final terminal webhook will have the last execution_id.
  //
  // However, we can't know if Bolna will retry or not from the webhook alone.
  // So we update the status — if a retry webhook comes later, resolveCallRecord
  // will reset it to CALLING.

  await prisma.call.update({
    where: { id: call.id },
    data: {
      status: terminalStatus,
      endedAt: new Date(),
    },
  });

  // Map lead status
  const leadStatus = terminalStatus === "FAILED" ? "FAILED" : "NO_ANSWER";

  await prisma.lead.update({
    where: { id: call.leadId },
    data: { status: leadStatus },
  });

  // V1: Dual stat increment
  await incrementTerminalStats(call, terminalStatus, false);

  // V1: Check batch + campaign completion
  await checkBatchAndCampaignCompletion(call);
}

// ─── V1: Dual Stat Increment ─────────────────────────────────────────────────

async function incrementTerminalStats(
  call: any,
  status: string,
  isQualified: boolean,
): Promise<void> {
  const isFailed = status === "FAILED";
  const isCompleted = status === "COMPLETED";

  // Campaign-level increment
  await prisma.campaign.update({
    where: { id: call.campaignId },
    data: {
      calledLeads: { increment: 1 },
      ...(isCompleted && { completedLeads: { increment: 1 } }),
      ...(isQualified && { completedLeads: { increment: 1 } }),
      ...(isFailed && { failedLeads: { increment: 1 } }),
    },
  });

  // V1: Batch-level increment
  if (call.batchId) {
    await prisma.leadBatch.update({
      where: { id: call.batchId },
      data: {
        calledLeads: { increment: 1 },
        ...(isCompleted && { completedLeads: { increment: 1 } }),
        ...(isQualified && { completedLeads: { increment: 1 } }),
        ...(isFailed && { failedLeads: { increment: 1 } }),
      },
    });
  }
}

// ─── V1: Batch + Campaign Completion Check ────────────────────────────────────

async function checkBatchAndCampaignCompletion(call: any): Promise<void> {
  if (call.batchId) {
    // 🛡️ Guard: If the batch is already STOPPED, do not auto-complete it
    const batch = await prisma.leadBatch.findUnique({
      where: { id: call.batchId },
      select: { status: true },
    });
    if (batch?.status === "STOPPED") {
      console.log(
        `[Webhook] Batch ${call.batchId} is STOPPED. Skipping completion check.`,
      );
      return;
    }

    const activeLeadsInBatch = await prisma.lead.count({
      where: {
        batchId: call.batchId,
        status: { in: ["PENDING", "CALLING"] },
      },
    });

    if (activeLeadsInBatch === 0) {
      await prisma.leadBatch.update({
        where: { id: call.batchId },
        data: { status: "COMPLETED", completedAt: new Date() },
      });
      console.log(
        `[Webhook] Batch ${call.batchId} — all leads terminal → COMPLETED`,
      );
    }
  }

  // Check if ALL batches in the campaign are terminal
  const batches = await prisma.leadBatch.findMany({
    where: { campaignId: call.campaignId },
    select: { status: true },
  });

  if (batches.length === 0) {
    await checkLegacyCampaignCompletion(call.campaignId);
    return;
  }

  const terminalStatuses = new Set(["COMPLETED", "STOPPED", "FAILED"]);
  const allTerminal = batches.every((b) => terminalStatuses.has(b.status));

  if (allTerminal) {
    const allFailed = batches.every((b) => b.status === "FAILED");
    await prisma.campaign.update({
      where: { id: call.campaignId },
      data: {
        status: allFailed ? "FAILED" : "COMPLETED",
        completedAt: new Date(),
      },
    });
    console.log(
      `[Webhook] Campaign ${call.campaignId} — all batches terminal → ${allFailed ? "FAILED" : "COMPLETED"}`,
    );
  }
}

// ─── Legacy MVP Campaign Completion (backward compat) ────────────────────────

async function checkLegacyCampaignCompletion(
  campaignId: string,
): Promise<void> {
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
      `[Webhook] Legacy campaign ${campaignId} — all calls completed → COMPLETED`,
    );
  }
}

// ─── V1: Batch Lifecycle Webhook Handler ─────────────────────────────────────
/**
 * Handles batch-level webhooks from Bolna.
 * Endpoint: POST /webhooks/bolna-batch
 *
 * Bolna fires this when:
 *   1. Batch finishes processing (all calls dispatched)
 *   2. All executions reach terminal state
 *
 * Payload shape (from Bolna docs):
 *   { batch_id, state, ... }
 */
export const handleBolnaBatchWebhook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  res.json({ received: true });

  const payload = req.body;
  const bolnaBatchId = payload.batch_id;
  const state = payload.state ?? payload.status;

  console.log(
    `[BatchWebhook] Bolna batch event | batch_id: ${bolnaBatchId} | state: ${state}`,
  );

  if (!bolnaBatchId) {
    console.warn("[BatchWebhook] No batch_id in payload — skipping");
    return;
  }

  try {
    const leadBatch = await prisma.leadBatch.findFirst({
      where: { bolnaBatchId },
    });

    if (!leadBatch) {
      console.warn(
        `[BatchWebhook] LeadBatch not found for bolnaBatchId: ${bolnaBatchId}`,
      );
      return;
    }

    const stateMap: Record<string, string> = {
      completed: "COMPLETED",
      stopped: "STOPPED",
      failed: "FAILED",
      running: "RUNNING",
      scheduled: "SCHEDULED",
    };

    const newStatus = stateMap[state];
    if (!newStatus) {
      console.log(
        `[BatchWebhook] Unhandled batch state: "${state}" — skipping`,
      );
      return;
    }

    // 🛡️ Guard: If the batch is already STOPPED locally, do not let Bolna webhooks revert it to COMPLETED.
    if (leadBatch.status === "STOPPED" && newStatus === "COMPLETED") {
      console.log(
        `[BatchWebhook] Batch ${leadBatch.id} is already STOPPED locally. Preserving STOPPED status to allow Resume.`,
      );
      return;
    }

    await prisma.leadBatch.update({
      where: { id: leadBatch.id },
      data: {
        status: newStatus as any,
        ...(newStatus === "COMPLETED" && { completedAt: new Date() }),
      },
    });

    console.log(`[BatchWebhook] LeadBatch ${leadBatch.id} → ${newStatus}`);

    if (newStatus === "COMPLETED") {
      await reconcileBatchStats(leadBatch.id, bolnaBatchId);
    }

    // Check campaign completion
    const batches = await prisma.leadBatch.findMany({
      where: { campaignId: leadBatch.campaignId },
      select: { status: true },
    });

    const terminalStatuses = new Set(["COMPLETED", "STOPPED", "FAILED"]);
    const allTerminal = batches.every((b) => terminalStatuses.has(b.status));

    if (allTerminal) {
      const allFailed = batches.every((b) => b.status === "FAILED");
      await prisma.campaign.update({
        where: { id: leadBatch.campaignId },
        data: {
          status: allFailed ? "FAILED" : "COMPLETED",
          completedAt: new Date(),
        },
      });
      console.log(
        `[BatchWebhook] Campaign ${leadBatch.campaignId} → ${allFailed ? "FAILED" : "COMPLETED"}`,
      );
    }
  } catch (error) {
    console.error("[BatchWebhook] Error processing event:", error);
  }
};

// ─── V1: Batch Stats Reconciliation ──────────────────────────────────────────
/**
 * After batch completion, fetch execution data from Bolna and reconcile
 * our local stats. This catches any webhooks we might have missed.
 */
async function reconcileBatchStats(
  batchId: string,
  bolnaBatchId: string,
): Promise<void> {
  try {
    const { bolnaClient } = await import("../../config/bolna");
    const executions = await bolnaClient.batches.getExecutions(bolnaBatchId);

    if (!executions || executions.length === 0) return;

    const completed = executions.filter((e) => e.status === "completed").length;
    const failed = executions.filter((e) =>
      ["failed", "error", "no-answer", "busy"].includes(e.status),
    ).length;

    const totalCostCents = executions.reduce(
      (sum, e) => sum + (e.total_cost ?? 0),
      0,
    );

    console.log(
      `[BatchWebhook] Reconciliation for batch ${batchId}: ` +
        `${completed} completed, ${failed} failed, cost: ${totalCostCents}¢`,
    );

    // Only update if there's a significant discrepancy (> 5% difference)
    const batch = await prisma.leadBatch.findUnique({
      where: { id: batchId },
    });

    if (!batch) return;

    const discrepancy = Math.abs(batch.completedLeads - completed);
    if (discrepancy > Math.max(1, completed * 0.05)) {
      console.warn(
        `[BatchWebhook] Stats discrepancy detected for batch ${batchId}: ` +
          `local completed=${batch.completedLeads}, bolna=${completed}. Reconciling...`,
      );

      await prisma.leadBatch.update({
        where: { id: batchId },
        data: {
          calledLeads: executions.length,
          completedLeads: completed,
          failedLeads: failed,
        },
      });
    }
  } catch (error) {
    // Non-fatal — stats will be slightly off but functional
    console.error(
      `[BatchWebhook] Stats reconciliation failed for batch ${batchId}:`,
      error,
    );
  }
}

// ─── Parse Extraction Data ────────────────────────────────────────────────────

function parseExtractionData(
  extracted: BolnaExtractedData | null,
): ParsedCallAnalysis | null {
  if (!extracted || typeof extracted !== "object") return null;

  const obj = (field?: { objective?: string | null }): string | null =>
    field?.objective?.trim() ?? null;

  const subj = (field?: { subjective?: string | null }): string | null =>
    field?.subjective?.trim() ?? null;

  const outcome = extracted["Call Outcome"];
  const qualification = extracted["Lead Qualification"];
  const nextAction = extracted["Next Action and Contact Preference"];
  const followUp = extracted["Follow-Up Schedule"];
  const compliance = extracted["Compliance"];
  const summary = extracted["Summary"];

  const parsed: ParsedCallAnalysis = {
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
    preferredConfiguration: subj(qualification?.preferred_configuration),
    budgetRange: subj(qualification?.budget_range),
    customerLocationPref: subj(qualification?.customer_location_pref),
    followupSchedule: subj(followUp?.followup_schedule),
    callSummary: subj(summary?.call_summary),
  };

  const hasAnyValue = Object.values(parsed).some((v) => v !== null);
  if (!hasAnyValue) {
    console.warn(
      "[Webhook] Extraction data present but all fields null — skipping CallAnalysis",
    );
    return null;
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
    // V1: Upsert instead of create to handle retry scenarios
    // where a previous attempt may have already created a CallAnalysis
    await prisma.callAnalysis.upsert({
      where: { callId },
      create: {
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
      update: {
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
    console.log(`[Webhook] CallAnalysis saved/updated for call: ${callId}`);
  } catch (error) {
    console.error(
      `[Webhook] Failed to save CallAnalysis for call ${callId}:`,
      error,
    );
  }
}

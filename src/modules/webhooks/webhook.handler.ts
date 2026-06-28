// src/modules/webhooks/webhook.handler.ts

import { Request, Response } from "express";
import prisma from "../../config/database";

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

interface BolnaWebhookPayload {
  // ── Primary identifier ──────────────────────────────────────────────────
  id?: string; // top-level call ID — confirmed
  execution_id?: string; // legacy queue response ID
  run_id?: string; // same as execution_id

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

  // ── Call results (populated on completion) ───────────────────────────────
  transcript?: string | null;
  summary?: string | null;
  conversation_duration?: number;
  error_message?: string | null;
  extracted_data?: any;

  // ── Nested data ──────────────────────────────────────────────────────────
  telephony_data?: BolnaTelephonyData;

  context_details?: {
    recipient_data: Record<string, string>;
    recipient_phone_number: string;
  };

  // ── Legacy flat fields (some Bolna events use these) ─────────────────────
  recording_url?: string;
  duration?: number;
  messages?: BolnaMessage[];
  ended_reason?: string;
  user_data?: Record<string, string>;
}

interface BolnaMessage {
  role: "agent" | "user";
  content: string;
  created_at?: string;
}

// ─── Resolve the call identifier from any Bolna event ────────────────────────
function resolveCallId(payload: BolnaWebhookPayload): string | null {
  return payload.id ?? payload.execution_id ?? payload.run_id ?? null;
}

// ─── Resolve recording URL from nested or flat ───────────────────────────────
function resolveRecordingUrl(payload: BolnaWebhookPayload): string | null {
  return payload.telephony_data?.recording_url ?? payload.recording_url ?? null;
}

// ─── Resolve duration ─────────────────────────────────────────────────────────
function resolveDuration(payload: BolnaWebhookPayload): number | null {
  return (
    payload.telephony_data?.duration ??
    payload.conversation_duration ??
    payload.duration ??
    null
  );
}

// ─── Main Handler ─────────────────────────────────────────────────────────────
export const handleBolnaWebhook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  // Acknowledge immediately — Bolna expects fast response
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
      // ── Placed, waiting to connect ─────────────────────────────────────
      case "queued":
      case "initiated": {
        await prisma.call.updateMany({
          where: { bolnaCallId: callId },
          data: {
            status: "CALLING",
            startedAt: new Date(),
          },
        });
        console.log(`[Webhook] Queued/initiated: ${callId}`);
        break;
      }

      // ── Phone ringing ──────────────────────────────────────────────────
      case "ringing": {
        // No status change — call is already CALLING
        console.log(`[Webhook] Ringing: ${callId}`);
        break;
      }

      // ── Lead answered ──────────────────────────────────────────────────
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

      // ── Call finished with transcript ──────────────────────────────────
      case "completed":
      case "ended":
      case "call_completed": {
        await handleCallCompleted(callId, payload);
        break;
      }

      // ── Lead didn't answer ─────────────────────────────────────────────
      case "no-answer":
      case "no_answer": {
        await handleCallNoAnswer(callId);
        break;
      }

      // ── Busy ───────────────────────────────────────────────────────────
      case "busy": {
        await handleCallBusy(callId);
        break;
      }

      // ── Error ──────────────────────────────────────────────────────────
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

// ─── Completed ────────────────────────────────────────────────────────────────
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

  // ── Normalize messages if present ────────────────────────────────────────
  const normalizedMessages = (payload.messages ?? [])
    .filter((m) => m.role === "agent" || m.role === "user")
    .map((m) => ({
      role: m.role === "agent" ? "assistant" : "user",
      message: m.content ?? "",
      time: m.created_at ?? null,
    }));

  // ── Build transcript ──────────────────────────────────────────────────────
  const transcriptText =
    payload.transcript ||
    normalizedMessages
      .map((m) => `${m.role === "assistant" ? "Agent" : "Lead"}: ${m.message}`)
      .join("\n") ||
    null;

  // ── Classify outcome ──────────────────────────────────────────────────────
  const outcome = determineOutcome(payload.summary ?? "");
  const duration = resolveDuration(payload);
  const recording = resolveRecordingUrl(payload);

  // ── Determine hangup reason ───────────────────────────────────────────────
  const hangupReason = payload.telephony_data?.hangup_reason ?? null;
  const callStatus =
    hangupReason === "customer-busy" ? "NO_ANSWER" : "COMPLETED";

  console.log(
    `[Webhook] Completed: ${callId} | outcome: ${outcome} | duration: ${duration}s`,
  );

  // ── Update call ───────────────────────────────────────────────────────────
  await prisma.call.update({
    where: { id: call.id },
    data: {
      status: callStatus as any,
      summary: payload.summary ?? null,
      transcript: transcriptText,
      transcriptMessages:
        normalizedMessages.length > 0 ? normalizedMessages : undefined,
      duration,
      recording,
      outcome,
      endedAt: new Date(),
    },
  });

  // ── Update lead ───────────────────────────────────────────────────────────
  await prisma.lead.update({
    where: { id: call.leadId },
    data: { status: outcome as any },
  });

  // ── Update campaign counters ──────────────────────────────────────────────
  if (outcome === "QUALIFIED") {
    await prisma.campaign.update({
      where: { id: call.campaignId },
      data: { successLeads: { increment: 1 } },
    });
  } else {
    await prisma.campaign.update({
      where: { id: call.campaignId },
      data: { calledLeads: { increment: 1 } },
    });
  }
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

  await prisma.call.update({
    where: { id: call.id },
    data: {
      status: "NO_ANSWER",
      outcome: "NO_ANSWER",
      endedAt: new Date(),
    },
  });

  await prisma.lead.update({
    where: { id: call.leadId },
    data: { status: "NO_ANSWER" },
  });

  console.log(`[Webhook] No answer: ${callId}`);
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

  await prisma.call.update({
    where: { id: call.id },
    data: {
      status: "BUSY",
      outcome: "BUSY",
      endedAt: new Date(),
    },
  });

  await prisma.lead.update({
    where: { id: call.leadId },
    data: { status: "NO_ANSWER" },
  });

  console.log(`[Webhook] Busy: ${callId}`);
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
    data: {
      status: "FAILED",
      outcome: "FAILED",
      endedAt: new Date(),
    },
  });

  await prisma.lead.update({
    where: { id: call.leadId },
    data: { status: "FAILED" },
  });

  await prisma.campaign.update({
    where: { id: call.campaignId },
    data: { failedLeads: { increment: 1 } },
  });
}

// ─── Outcome Classifier ───────────────────────────────────────────────────────
function determineOutcome(summary: string): string {
  const lower = summary.toLowerCase();

  if (
    lower.includes("not interested") ||
    lower.includes("not qualified") ||
    lower.includes("cold")
  )
    return "NOT_QUALIFIED";

  if (
    lower.includes("qualified") ||
    lower.includes("hot") ||
    lower.includes("interested") ||
    lower.includes("follow up") ||
    lower.includes("warm")
  )
    return "QUALIFIED";

  return "CALLED";
}

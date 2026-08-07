// src/modules/calls/call.service.ts

import prisma from "../../config/database";
import { CallStatus } from "../../generated/prisma";

export class CallService {
  // ─── List ──────────────────────────────────────────────────────────────────
  async list(
    tenantId: string,
    filters: {
      campaignId?: string;
      leadId?: string;
      status?: string;
      page?: number;
      limit?: number;
    }
  ) {
    const { campaignId, leadId, status, page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    const where = {
      tenantId,
      ...(campaignId && { campaignId }),
      ...(leadId && { leadId }),
      ...(status && { status: status as CallStatus }),
    };

    const [calls, total] = await Promise.all([
      prisma.call.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          lead: { select: { id: true, name: true, phone: true } },
          campaign: { select: { id: true, name: true } },
          callAnalysis: true,
        },
      }),
      prisma.call.count({ where }),
    ]);

    return {
      calls,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }

  // ─── Get ───────────────────────────────────────────────────────────────────
  async get(tenantId: string, id: string) {
    const call = await prisma.call.findFirst({
      where: { id, tenantId },
      include: {
        lead: true,
        campaign: true,
        callAnalysis: true,
      },
    });

    if (!call) throw new Error("Call not found");
    return call;
  }

  // ─── Get Transcript ────────────────────────────────────────────────────────
  async getTranscript(tenantId: string, id: string) {
    const call = await prisma.call.findFirst({
      where: { id, tenantId },
      include: {
        callAnalysis: true,
      },
    });

    if (!call) throw new Error("Call not found");

    return {
      transcript: call.transcript,
      transcriptMessages: call.transcriptMessages,
      summary: call.summary,
      duration: call.duration,
      recording: call.recording,
      callAnalysis: call.callAnalysis ?? null,
    };
  }
}

export default new CallService();
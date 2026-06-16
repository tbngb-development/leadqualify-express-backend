import prisma from "../../config/database";
import { CallStatus } from "@prisma/client";

export class CallService {
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

  async get(tenantId: string, id: string) {
    const call = await prisma.call.findFirst({
      where: { id, tenantId },
      include: {
        lead: true,
        campaign: true,
      },
    });

    if (!call) throw new Error("Call not found");
    return call;
  }

  async getTranscript(tenantId: string, id: string) {
    const call = await prisma.call.findFirst({
      where: { id, tenantId },
    });

    if (!call) throw new Error("Call not found");

    return {
      transcript: call.transcript,
      transcriptMessages: call.transcriptMessages,
      summary: call.summary,
      outcome: call.outcome,
      duration: call.duration,
      recording: call.recording,
    };
  }
}

export default new CallService();
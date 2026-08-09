// src/modules/calls/call.service.ts

import prisma from "../../config/database";
import { CallStatus, Disposition, LeadTemperature } from "../../generated/prisma";

// ─── Qualifying dispositions (mirrors dashboard constants) ────────────────────
const QUALIFYING_DISPOSITIONS: Disposition[] = [
  "QUALIFIED_CONSULTANT_FOLLOWUP",
  "SITE_VISIT_INTEREST",
  "INTERESTED_SEND_DETAILS",
  "INTERESTED_GENERAL",
];

export class CallService {
  // ─── List ──────────────────────────────────────────────────────────────────
  async list(
    tenantId: string,
    filters: {
      campaignId?: string;
      leadId?: string;
      status?: string;
      disposition?: string;
      leadTemperature?: string;
      dateFrom?: string;
      dateTo?: string;
      sortBy?: string;
      sortOrder?: string;
      page?: number;
      limit?: number;
    }
  ) {
    const {
      campaignId,
      leadId,
      status,
      disposition,
      leadTemperature,
      dateFrom,
      dateTo,
      sortBy = "createdAt",
      sortOrder = "desc",
      page = 1,
      limit = 20,
    } = filters;

    const skip = (page - 1) * limit;

    // ── Build date range filter ───────────────────────────────────────────────
    const dateFilter =
      dateFrom || dateTo
        ? {
            startedAt: {
              ...(dateFrom && { gte: new Date(dateFrom) }),
              ...(dateTo && { lte: new Date(dateTo) }),
            },
          }
        : {};

    // ── Build callAnalysis filter ─────────────────────────────────────────────
    const analysisFilter =
      disposition || leadTemperature
        ? {
            callAnalysis: {
              ...(disposition && {
                disposition: disposition as Disposition,
              }),
              ...(leadTemperature && {
                leadTemperature: leadTemperature as LeadTemperature,
              }),
            },
          }
        : {};

    const where = {
      tenantId,
      ...(campaignId && { campaignId }),
      ...(leadId && { leadId }),
      ...(status && { status: status as CallStatus }),
      ...dateFilter,
      ...analysisFilter,
    };

    // ── Build sort ────────────────────────────────────────────────────────────
    const validSortFields = ["createdAt", "startedAt", "duration"];
    const orderField = validSortFields.includes(sortBy) ? sortBy : "createdAt";
    const orderDir = sortOrder === "asc" ? "asc" : "desc";

    const [calls, total] = await Promise.all([
      prisma.call.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [orderField]: orderDir },
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
      include: { callAnalysis: true },
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

  // ─── Stats ─────────────────────────────────────────────────────────────────
  async getStats(
    tenantId: string,
    filters: { campaignId?: string; leadId?: string }
  ) {
    const { campaignId, leadId } = filters;

    const where = {
      tenantId,
      ...(campaignId && { campaignId }),
      ...(leadId && { leadId }),
    };

    const analysisWhere = {
      tenantId,
      ...(campaignId && { call: { campaignId } }),
      ...(leadId && { call: { leadId } }),
    };

    const [
      total,
      completed,
      failed,
      noAnswer,
      busy,
      durationAgg,
      dispositionGroups,
      temperatureGroups,
      qualifiedCount,
    ] = await Promise.all([
      prisma.call.count({ where }),
      prisma.call.count({ where: { ...where, status: "COMPLETED" } }),
      prisma.call.count({ where: { ...where, status: "FAILED" } }),
      prisma.call.count({ where: { ...where, status: "NO_ANSWER" } }),
      prisma.call.count({ where: { ...where, status: "BUSY" } }),

      // Average duration — only for completed calls with duration
      prisma.call.aggregate({
        where: { ...where, status: "COMPLETED", duration: { not: null } },
        _avg: { duration: true },
      }),

      // Disposition breakdown
      prisma.callAnalysis.groupBy({
        by: ["disposition"],
        where: {
          tenantId,
          ...(campaignId && { call: { campaignId } }),
          ...(leadId && { call: { leadId } }),
          disposition: { not: null },
        },
        _count: true,
      }),

      // Temperature breakdown
      prisma.callAnalysis.groupBy({
        by: ["leadTemperature"],
        where: {
          tenantId,
          ...(campaignId && { call: { campaignId } }),
          ...(leadId && { call: { leadId } }),
          leadTemperature: { not: null },
        },
        _count: true,
      }),

      // Qualified count
      prisma.callAnalysis.count({
        where: {
          tenantId,
          ...(campaignId && { call: { campaignId } }),
          ...(leadId && { call: { leadId } }),
          disposition: { in: QUALIFYING_DISPOSITIONS },
        },
      }),
    ]);

    // ── Shape disposition breakdown ───────────────────────────────────────────
    const dispositionBreakdown: Record<string, number> = {};
    for (const g of dispositionGroups) {
      if (g.disposition) {
        dispositionBreakdown[g.disposition] = g._count;
      }
    }

    // ── Shape temperature breakdown ───────────────────────────────────────────
    const temperatureBreakdown: Record<string, number> = {};
    for (const g of temperatureGroups) {
      if (g.leadTemperature) {
        temperatureBreakdown[g.leadTemperature] = g._count;
      }
    }

    const qualificationRate =
      total > 0 ? ((qualifiedCount / total) * 100).toFixed(1) + "%" : "0%";

    return {
      total,
      completed,
      failed,
      noAnswer,
      busy,
      avgDuration: Math.round(durationAgg._avg.duration ?? 0),
      qualifiedCount,
      qualificationRate,
      dispositionBreakdown,
      temperatureBreakdown,
    };
  }
}

export default new CallService();
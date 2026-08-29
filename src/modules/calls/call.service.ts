// src/modules/calls/call.service.ts

import prisma from "../../config/database";
import { Disposition } from "../../generated/prisma";

// ─── Qualifying dispositions (mirrors dashboard constants) ────────────────────
const QUALIFYING_DISPOSITIONS: Disposition[] = [
  "QUALIFIED_CONSULTANT_FOLLOWUP",
  "SITE_VISIT_INTEREST",
  "INTERESTED_SEND_DETAILS",
  "INTERESTED_GENERAL",
  "INTERESTED_SEND_DETAILS",
];

export class CallService {
  // ─── List ──────────────────────────────────────────────────────────────────
  async list(
    tenantId: string,
    query: {
      campaignId?: string;
      leadId?: string;
      status?: string;
      disposition?: string;
      leadTemperature?: string;
      locationMatch?: string;
      search?: string;
      dateFrom?: string;
      dateTo?: string;
      sortBy?: string;
      sortOrder?: "asc" | "desc";
      page?: number;
      limit?: number;
    },
  ) {
    const {
      campaignId,
      leadId,
      status,
      disposition,
      leadTemperature,
      locationMatch,
      search,
      dateFrom,
      dateTo,
      sortBy = "startedAt",
      sortOrder = "desc",
      page = 1,
      limit = 15,
    } = query;

    const where: any = { tenantId };

    if (campaignId) where.campaignId = campaignId;
    if (leadId) where.leadId = leadId;

    // ─── Status Filter (handles "NO_ANSWER,BUSY" or "COMPLETED") ───
    if (status) {
      const statuses = status
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      where.status = statuses.length > 1 ? { in: statuses } : statuses[0];
    }

    // ─── Date Range Filter ───
    if (dateFrom || dateTo) {
      where.startedAt = {};
      if (dateFrom) where.startedAt.gte = new Date(dateFrom);
      if (dateTo) where.startedAt.lte = new Date(dateTo);
    }

    // ─── Disposition & Temperature Filters ───
    const callAnalysisWhere: any = {};

    if (disposition) {
      const disps = disposition
        .split(",")
        .map((d) => d.trim())
        .filter(Boolean);
      callAnalysisWhere.disposition =
        disps.length > 1 ? { in: disps } : disps[0];
    }

    if (leadTemperature) {
      const temps = leadTemperature
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      callAnalysisWhere.leadTemperature =
        temps.length > 1 ? { in: temps } : temps[0];
    }
    
    if (locationMatch) {
      const matches = locationMatch
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean);
      callAnalysisWhere.locationMatch =
        matches.length > 1 ? { in: matches } : matches[0];
    }

    if (Object.keys(callAnalysisWhere).length > 0) {
      where.callAnalysis = callAnalysisWhere;
    }

    // ─── Search by Lead Name or Phone ───
    if (search) {
      where.lead = {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { phone: { contains: search } },
        ],
      };
    }

    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.max(1, Number(limit));

    const [calls, total] = await Promise.all([
      prisma.call.findMany({
        where,
        include: {
          lead: { select: { id: true, name: true, phone: true } },
          campaign: { select: { id: true, name: true } },
          callAnalysis: true,
        },
        orderBy: { [sortBy]: sortOrder },
        skip: (pageNum - 1) * limitNum,
        take: limitNum,
      }),
      prisma.call.count({ where }),
    ]);

    return {
      calls,
      pagination: {
        total,
        page: pageNum,
        limit,
        pages: Math.ceil(total / limitNum),
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
    filters: { campaignId?: string; leadId?: string },
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

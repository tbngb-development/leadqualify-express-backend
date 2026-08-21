// src/modules/leads/lead.service.ts

import prisma from "../../config/database";
import { Disposition, LeadStatus } from "../../generated/prisma";

const QUALIFYING_DISPOSITIONS: Disposition[] = [
  "QUALIFIED_CONSULTANT_FOLLOWUP",
  "SITE_VISIT_INTEREST",
  "INTERESTED_SEND_DETAILS",
  "INTERESTED_GENERAL",
];

export class LeadService {
  // ─── List ──────────────────────────────────────────────────────────────────
  async list(
    tenantId: string,
    filters: {
      campaignId?: string;
      status?: string;
      doNotCall?: boolean;
      leadTemperature?: string;
      dateFrom?: string;
      dateTo?: string;
      sortBy?: string;
      sortOrder?: string;
      page?: number;
      limit?: number;
    },
  ) {
    const {
      campaignId,
      status,
      doNotCall,
      leadTemperature,
      dateFrom,
      dateTo,
      sortBy = "createdAt",
      sortOrder = "desc",
      page = 1,
      limit = 20,
    } = filters;

    const skip = (page - 1) * limit;

    const dateFilter =
      dateFrom || dateTo
        ? {
            createdAt: {
              ...(dateFrom && { gte: new Date(dateFrom) }),
              ...(dateTo && { lte: new Date(dateTo) }),
            },
          }
        : {};

    // Explicitly typing 'where' as 'any' stops compilation errors when appending dynamic sub-queries
    const where: any = {
      tenantId,
      ...(campaignId && { campaignId }),
      ...(status && { status: status as LeadStatus }),
      ...(doNotCall !== undefined && { doNotCall }),
      ...dateFilter,
    };

    // ── Filter leads by their latest call's leadTemperature (Supports Multi-value) ──
    if (leadTemperature) {
      const temps = leadTemperature
        .split(",")
        .map((t) => t.trim().toUpperCase());

      where.calls = {
        some: {
          callAnalysis: {
            leadTemperature: { in: temps },
          },
        },
      };
    }

    const validSortFields = ["createdAt", "name", "updatedAt"];
    const orderField = validSortFields.includes(sortBy) ? sortBy : "createdAt";
    const orderDir = sortOrder === "asc" ? "asc" : "desc";

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [orderField]: orderDir },
        include: {
          campaign: { select: { id: true, name: true } },
        },
      }),
      prisma.lead.count({ where }),
    ]);

    return {
      leads,
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
    const lead = await prisma.lead.findFirst({
      where: { id, tenantId },
      include: {
        campaign: true,
        calls: {
          orderBy: { createdAt: "desc" },
          include: { callAnalysis: true },
        },
      },
    });
    if (!lead) throw new Error("Lead not found");
    return lead;
  }

  // ─── Stats ─────────────────────────────────────────────────────────────────
  async getStats(tenantId: string, filters: { campaignId?: string }) {
    const { campaignId } = filters;

    const where = {
      tenantId,
      ...(campaignId && { campaignId }),
    };

    const [
      total,
      pending,
      calling,
      called,
      failed,
      noAnswer,
      doNotCallCount,
      qualifiedCount,
    ] = await Promise.all([
      prisma.lead.count({ where }),
      prisma.lead.count({ where: { ...where, status: "PENDING" } }),
      prisma.lead.count({ where: { ...where, status: "CALLING" } }),
      prisma.lead.count({ where: { ...where, status: "CALLED" } }),
      prisma.lead.count({ where: { ...where, status: "FAILED" } }),
      prisma.lead.count({ where: { ...where, status: "NO_ANSWER" } }),
      prisma.lead.count({ where: { ...where, doNotCall: true } }),

      // Qualified via CallAnalysis disposition
      prisma.callAnalysis.count({
        where: {
          tenantId,
          disposition: { in: QUALIFYING_DISPOSITIONS },
          ...(campaignId && { call: { campaignId } }),
        },
      }),
    ]);

    const qualificationRate =
      total > 0 ? ((qualifiedCount / total) * 100).toFixed(1) + "%" : "0%";

    return {
      total,
      pending,
      calling,
      called,
      failed,
      noAnswer,
      doNotCall: doNotCallCount,
      qualified: qualifiedCount,
      qualificationRate,
    };
  }
}

export default new LeadService();

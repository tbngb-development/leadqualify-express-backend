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
      dateFrom?: string;
      dateTo?: string;
      search?: string;
      sortBy?: string;
      sortOrder?: string;
      page?: number;
      limit?: number;
    },
  ) {
    const {
      campaignId,
      status,
      dateFrom,
      dateTo,
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
      page = 1,
      limit = 20,
    } = filters;

    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.max(1, Number(limit));
    const skip = (pageNum - 1) * limitNum;

    // Explicitly typing 'where' as 'any' stops compilation errors when appending dynamic sub-queries
    const where: any = {
      tenantId,
      ...(campaignId && { campaignId }),
    };

    // ── Status Filter (Supports single or comma-separated e.g. "PENDING,CALLED") ──
    if (status) {
      const statuses = status
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      where.status = statuses.length > 1 ? { in: statuses } : statuses[0];
    }

    // ── Date Range Filter ──
    if (dateFrom || dateTo) {
      where.createdAt = {
        ...(dateFrom && { gte: new Date(dateFrom) }),
        ...(dateTo && { lte: new Date(dateTo) }),
      };
    }

    // ── Search Filter (Name or Phone) ──
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { phone: { contains: search } },
      ];
    }

    // ── Sorting ──
    const validSortFields = ["createdAt", "name", "updatedAt"];
    const orderField = validSortFields.includes(sortBy) ? sortBy : "createdAt";
    const orderDir = sortOrder === "asc" ? "asc" : "desc";

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { [orderField]: orderDir },
        include: {
          campaign: { select: { id: true, name: true } },
        },
      }),
      prisma.lead.count({ where }),
    ]);

    const pages = Math.ceil(total / limitNum);

    return {
      leads,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages,
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

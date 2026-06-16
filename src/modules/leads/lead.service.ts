import prisma from "../../config/database";
import { LeadStatus } from "@prisma/client";

export class LeadService {
  async list(
    tenantId: string,
    filters: {
      campaignId?: string;
      status?: string;
      page?: number;
      limit?: number;
    }
  ) {
    const { campaignId, status, page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    const where = {
      tenantId,
      ...(campaignId && { campaignId }),
      ...(status && { status: status as LeadStatus }),
    };

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
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

  async get(tenantId: string, id: string) {
    const lead = await prisma.lead.findFirst({
      where: { id, tenantId },
      include: {
        campaign: true,
        calls: { orderBy: { createdAt: "desc" } },
      },
    });

    if (!lead) throw new Error("Lead not found");
    return lead;
  }
}

export default new LeadService();
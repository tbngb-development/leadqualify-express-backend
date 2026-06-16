import prisma from "../../config/database";
import { CallStatus, CampaignStatus, LeadStatus } from "../../types";

export class TenantService {
  // ─── List All Tenants (Super Admin) ────────────────────────────────────────
  async list() {
    return prisma.tenant.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: {
            users: true,
            campaigns: true,
            leads: true,
          },
        },
      },
    });
  }

  // ─── Get Single Tenant ─────────────────────────────────────────────────────
  async get(id: string) {
    const tenant = await prisma.tenant.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            users: true,
            campaigns: true,
            leads: true,
            calls: true,
          },
        },
      },
    });

    if (!tenant) throw new Error("Tenant not found");
    return tenant;
  }

  // ─── Update Tenant ─────────────────────────────────────────────────────────
  async update(id: string, data: { name?: string; isActive?: boolean }) {
    const tenant = await prisma.tenant.findUnique({ where: { id } });
    if (!tenant) throw new Error("Tenant not found");

    return prisma.tenant.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(typeof data.isActive === "boolean" && {
          isActive: data.isActive,
        }),
      },
    });
  }

  // ─── Get Tenant Stats ──────────────────────────────────────────────────────
  async stats(id: string) {
    const tenant = await prisma.tenant.findUnique({ where: { id } });
    if (!tenant) throw new Error("Tenant not found");
    const [
      totalUsers,
      totalLeads,
      qualifiedLeads,
      totalCalls,
      completedCalls,
      activeCampaigns,
    ] = await prisma.$transaction([
      prisma.user.count({
        where: { tenantId: id },
      }),
      prisma.lead.count({
        where: { tenantId: id },
      }),
      prisma.lead.count({
        where: {
          tenantId: id,
          status: LeadStatus.QUALIFIED as LeadStatus,
        },
      }),
      prisma.call.count({
        where: { tenantId: id },
      }),
      prisma.call.count({
        where: {
          tenantId: id,
          status: CallStatus.COMPLETED as CallStatus,
        },
      }),
      prisma.campaign.count({
        where: {
          tenantId: id,
          status: CampaignStatus.RUNNING as CampaignStatus,
        },
      }),
    ]);

    const qualificationRate =
      totalLeads === 0
        ? 0
        : Number(((qualifiedLeads / totalLeads) * 100).toFixed(2));

    return {
      tenant,
      stats: {
        totalUsers,
        totalLeads,
        qualifiedLeads,
        totalCalls,
        completedCalls,
        activeCampaigns,
        qualificationRate,
      },
    };
  }
}

export default new TenantService();

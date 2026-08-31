import prisma from "../../../../shared/config/database/prisma";
import type {
  AdminDashboardRepository,
  AdminOverviewStats,
  TenantHealthMetric,
  PlatformActivityLog,
} from "../../application/interfaces/admin-dashboard-repository.interface";

export class PrismaAdminDashboardRepository implements AdminDashboardRepository {
  async getOverviewStats(): Promise<AdminOverviewStats> {
    const [
      totalTenants,
      activeTenants,
      totalCampaigns,
      totalCalls,
      callDurationAgg,
    ] = await Promise.all([
      prisma.tenant.count(),
      prisma.tenant.count({ where: { isActive: true } }),
      prisma.campaign.count(),
      prisma.call.count(),
      prisma.call.aggregate({
        _sum: {
          duration: true,
        },
      }),
    ]);

    const durationSeconds = callDurationAgg._sum.duration ?? 0;
    const totalDurationMinutes = Math.round(durationSeconds / 60);

    return {
      totalTenants,
      activeTenants,
      totalCampaigns,
      totalCalls,
      totalDurationMinutes,
    };
  }

  async getTenantHealthMetrics(): Promise<TenantHealthMetric[]> {
    const tenants = await prisma.tenant.findMany({
      include: {
        _count: {
          select: {
            campaigns: true,
            calls: true,
          },
        },
        calls: {
          select: {
            status: true,
          },
        },
      },
    });

    return tenants.map((tenant) => {
      const completedCalls = tenant.calls.filter(
        (c) => c.status === "COMPLETED",
      ).length;
      const failedCalls = tenant.calls.filter(
        (c) => c.status === "FAILED",
      ).length;

      return {
        tenantId: tenant.id,
        tenantName: tenant.name,
        isActive: tenant.isActive,
        totalCampaigns: tenant._count.campaigns,
        totalCalls: tenant._count.calls,
        completedCalls,
        failedCalls,
      };
    });
  }

  async getPlatformActivity(limit: number): Promise<PlatformActivityLog[]> {
    // Queries recent metadata updates from multiple critical tables and merges them statically
    const [campaigns, batches, calls] = await Promise.all([
      prisma.campaign.findMany({
        take: limit,
        orderBy: { updatedAt: "desc" },
        include: { tenant: true },
      }),
      prisma.leadBatch.findMany({
        take: limit,
        orderBy: { updatedAt: "desc" },
        include: { tenant: true, campaign: true },
      }),
      prisma.call.findMany({
        take: limit,
        orderBy: { updatedAt: "desc" },
        include: { tenant: true, campaign: true },
      }),
    ]);

    const logs: PlatformActivityLog[] = [];

    campaigns.forEach((c) => {
      if (c.status === "RUNNING") {
        logs.push({
          id: `camp-${c.id}-${c.updatedAt.getTime()}`,
          tenantId: c.tenantId,
          tenantName: c.tenant.name,
          type: "CAMPAIGN_STARTED",
          message: `Campaign "${c.name}" has started running.`,
          timestamp: c.updatedAt,
        });
      }
    });

    batches.forEach((b) => {
      if (b.status === "COMPLETED") {
        logs.push({
          id: `batch-${b.id}-${b.updatedAt.getTime()}`,
          tenantId: b.tenantId,
          tenantName: b.tenant.name,
          type: "BATCH_COMPLETED",
          message: `Batch file "${b.fileName ?? "unknown"}" inside Campaign "${b.campaign.name}" completed.`,
          timestamp: b.updatedAt,
        });
      }
    });

    calls.forEach((cl) => {
      if (cl.status === "COMPLETED" || cl.status === "FAILED") {
        logs.push({
          id: `call-${cl.id}-${cl.updatedAt.getTime()}`,
          tenantId: cl.tenantId,
          tenantName: cl.tenant.name,
          type: cl.status === "COMPLETED" ? "CALL_COMPLETED" : "CALL_FAILED",
          message: `Call with ID ${cl.bolnaCallId ?? cl.id} finished with status: ${cl.status}.`,
          timestamp: cl.updatedAt,
        });
      }
    });

    return logs
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit);
  }
}

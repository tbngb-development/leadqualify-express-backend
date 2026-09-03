import prisma from "../../../../shared/config/database/prisma";

export class GetPaymentSummaryUseCase {
  async execute() {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const [totalRev, mrrResult, failedCount, successCount] = await Promise.all([
      prisma.recharge.aggregate({
        _sum: { amount: true },
        where: { status: "SUCCESS" },
      }),
      prisma.recharge.aggregate({
        _sum: { amount: true },
        where: { status: "SUCCESS", completedAt: { gte: thirtyDaysAgo } },
      }),
      prisma.recharge.count({ where: { status: "FAILED" } }),
      prisma.recharge.count({ where: { status: "SUCCESS" } }),
    ]);

    return {
      totalRevenuePaisa: totalRev._sum.amount ?? 0,
      mrrApproxPaisa: mrrResult._sum.amount ?? 0, // 30-day rolling revenue
      failedCount,
      successCount,
    };
  }
}

export class ListAdminPaymentsUseCase {
  async execute(filters: {
    tenantId?: string;
    status?: string;
    page: number;
    limit: number;
  }) {
    const skip = (filters.page - 1) * filters.limit;

    const where = {
      ...(filters.tenantId ? { tenantId: filters.tenantId } : {}),
      ...(filters.status ? { status: filters.status as any } : {}),
    };

    const [items, total] = await Promise.all([
      prisma.recharge.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: filters.limit,
        include: {
          wallet: { include: { tenant: { select: { name: true } } } },
        },
      }),
      prisma.recharge.count({ where }),
    ]);

    return {
      items: items.map((r) => ({
        id: r.id,
        tenantId: r.tenantId,
        tenantName: r.wallet?.tenant?.name,
        amount: r.amount,
        purpose: r.purpose,
        status: r.status,
        createdAt: r.createdAt.toISOString(),
        completedAt: r.completedAt?.toISOString() ?? null,
      })),
      total,
      page: filters.page,
      limit: filters.limit,
    };
  }
}

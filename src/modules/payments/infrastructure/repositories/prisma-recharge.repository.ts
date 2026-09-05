import prisma from "../../../../shared/config/database/prisma";
import type {
  RechargeRepository,
  CreateRechargeData,
  RechargeEntity,
  RechargeWithTenant,
  ListRechargeFilters,
  Pagination,
  PaymentSummary,
} from "../../application/interfaces/recharge-repository.interface";

export class PrismaRechargeRepository implements RechargeRepository {
  async create(data: CreateRechargeData): Promise<RechargeEntity> {
    return prisma.recharge.create({ data });
  }

  async findByRazorpayOrderId(orderId: string): Promise<RechargeEntity | null> {
    return prisma.recharge.findUnique({
      where: { razorpayOrderId: orderId },
    });
  }

  async markSuccess(
    id: string,
    paymentId: string,
    signature: string,
  ): Promise<void> {
    await prisma.recharge.update({
      where: { id },
      data: {
        status: "SUCCESS",
        razorpayPaymentId: paymentId,
        razorpaySignature: signature,
        completedAt: new Date(),
      },
    });
  }

  async getSummary(): Promise<PaymentSummary> {
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
      totalRevenuePaisa: totalRev._sum?.amount ?? 0,
      mrrApproxPaisa: mrrResult._sum?.amount ?? 0,
      failedCount,
      successCount,
    };
  }

  async listWithTenant(
    filters: ListRechargeFilters,
    pagination: Pagination,
  ): Promise<{ items: RechargeWithTenant[]; total: number }> {
    const page = pagination.page > 0 ? pagination.page : 1;
    const limit = pagination.limit > 0 ? Math.min(pagination.limit, 100) : 50;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};
    if (filters.tenantId) where.tenantId = filters.tenantId;
    if (filters.status) where.status = filters.status;

    const [rows, total] = await Promise.all([
      prisma.recharge.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          wallet: {
            include: {
              tenant: { select: { name: true } },
            },
          },
        },
      }),
      prisma.recharge.count({ where }),
    ]);

    const items: RechargeWithTenant[] = rows.map((r) => ({
      ...r,
      tenantName: r.wallet?.tenant?.name ?? "Unknown Workspace",
    }));

    return { items, total };
  }
}

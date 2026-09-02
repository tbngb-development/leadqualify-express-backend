import prisma from "../../../../shared/config/database/prisma";
import type { IPaymentProvider } from "../../../../shared/config/external/payments/payment-provider.interface";
import { HttpStatus } from "../../../../shared/constants";
import { AppError } from "../../../../shared/errors";
import type { PlanRepository } from "../../../plans/application/interfaces/plan-repository.interface";
import { TenantPlanNotFoundError } from "../../../plans/domain/errors/plan.errors";

// create-onboarding-order.use-case.ts
export class CreateOnboardingOrderUseCase {
  constructor(
    private readonly planRepo: PlanRepository,
    private readonly payments: IPaymentProvider,
  ) {}

  async execute(tenantId: string) {
    const active = await this.planRepo.getActivePlanForTenant(tenantId);
    // allow PENDING_PAYMENT — getActivePlanForTenant returns status
    if (!active) throw new TenantPlanNotFoundError(tenantId);
    if (active.status === "ACTIVE") {
      throw new AppError(
        HttpStatus.BAD_REQUEST,
        "Plan already active",
        "PLAN_ALREADY_ACTIVE",
      );
    }

    const order = await this.payments.createOrder({
      amountPaisa: active.onboardingFee,
      receipt: `onb_${tenantId.slice(0, 8)}_${Date.now()}`,
      notes: { tenantId, purpose: "ONBOARDING", planId: active.id },
    });

    const wallet = await prisma.wallet.findUnique({ where: { tenantId } });
    // ensure wallet id for FK
    const w = wallet ?? (await prisma.wallet.create({ data: { tenantId } }));

    await prisma.recharge.create({
      data: {
        walletId: w.id,
        tenantId,
        amount: active.onboardingFee,
        purpose: "ONBOARDING",
        status: "INITIATED",
        razorpayOrderId: order.orderId,
        planId: active.id,
      },
    });

    return order;
  }
}

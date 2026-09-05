import type { IPaymentProvider } from "../../../../shared/config/external/payments/payment-provider.interface";
import type { PlanRepository } from "../../../plans/application/interfaces/plan-repository.interface";
import type { WalletRepository } from "../../../wallet/application/interfaces/wallet-repository.interface";
import type { RechargeRepository } from "../interfaces/recharge-repository.interface";
import { TenantPlanNotFoundError } from "../../../plans/domain/errors/plan.errors";
import { RECHARGE_SLABS_PAISA } from "../../../../shared/constants/messages";
import {
  InvalidRechargeSlabError,
  PaymentProviderError,
  PlanAlreadyActiveError,
} from "../../domain/errors/payment.errors";
import type { CreateOrderInput, CreateOrderResponse } from "../dto/payment.dto";

export class CreateOrderUseCase {
  constructor(
    private readonly planRepo: PlanRepository,
    private readonly walletRepo: WalletRepository,
    private readonly rechargeRepo: RechargeRepository,
    private readonly payments: IPaymentProvider,
  ) {}

  async execute(input: CreateOrderInput): Promise<CreateOrderResponse> {
    const { tenantId, purpose } = input;

    // 1. Resolve amount + planId server-side
    let amount: number;
    let planId: string | null = null;

    if (purpose === "ONBOARDING") {
      const active = await this.planRepo.getActivePlanForTenant(tenantId);
      if (!active) throw new TenantPlanNotFoundError(tenantId);
      if (active.status === "ACTIVE") throw new PlanAlreadyActiveError();
      amount = active.onboardingFee;
      planId = active.id;
    } else {
      const requested = input.amountPaisa;
      if (
        !requested ||
        !RECHARGE_SLABS_PAISA.includes(
          requested as (typeof RECHARGE_SLABS_PAISA)[number],
        )
      ) {
        throw new InvalidRechargeSlabError();
      }
      amount = requested;
    }

    // 2. Ensure wallet exists
    const wallet = await this.walletRepo.ensureWallet(tenantId);

    // 3. Create Razorpay order
    let order;
    try {
      order = await this.payments.createOrder({
        amountPaisa: amount,
        receipt: `${purpose === "ONBOARDING" ? "onb" : "top"}_${tenantId.slice(0, 8)}_${Date.now()}`,
        notes: {
          tenantId,
          purpose,
          ...(planId ? { planId } : {}),
        },
      });
    } catch (err: any) {
      const status = err?.statusCode ?? err?.status;
      if (status === 401)
        throw new PaymentProviderError("Payment provider misconfigured");
      throw new PaymentProviderError(
        err?.error?.description ?? "Failed to create order",
      );
    }

    // 4. Persist Recharge (INITIATED)
    const recharge = await this.rechargeRepo.create({
      walletId: wallet.id,
      tenantId,
      amount,
      purpose,
      status: "INITIATED",
      razorpayOrderId: order.orderId,
      planId,
    });

    return {
      orderId: order.orderId,
      amount: order.amount,
      currency: order.currency,
      keyId: order.keyId,
      rechargeId: recharge.id,
      purpose,
    };
  }
}

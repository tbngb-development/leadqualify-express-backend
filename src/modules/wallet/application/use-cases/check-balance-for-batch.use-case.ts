import type { WalletRepository } from "../interfaces/wallet-repository.interface";
import type { PlanRepository } from "../../../plans/application/interfaces/plan-repository.interface";
import { calculateCallCost } from "../../../plans/domain/rules/billing-calculator";
import { InsufficientBalanceError } from "../../domain/errors/wallet.errors";
import { TenantPlanNotFoundError } from "../../../plans/domain/errors/plan.errors";

const ESTIMATED_AVG_CALL_SEC = 90;

export interface CheckBalanceForBatchResult {
  ok: boolean;
  warning: boolean;
  balance: number;
  estimatedCost: number;
}

export class CheckBalanceForBatchUseCase {
  constructor(
    private readonly walletRepo: WalletRepository,
    private readonly planRepo: PlanRepository,
  ) {}

  async execute(input: {
    tenantId: string;
    leadCount: number;
  }): Promise<CheckBalanceForBatchResult> {
    const plan = await this.planRepo.getActivePlanForTenant(input.tenantId);
    if (!plan || plan.status !== "ACTIVE") {
      throw new TenantPlanNotFoundError(input.tenantId);
    }

    const wallet = await this.walletRepo.ensureWallet(input.tenantId);
    const perCall = calculateCallCost({
      durationSec: ESTIMATED_AVG_CALL_SEC,
      perMinuteRate: plan.perMinuteRate,
      billingMinimumSec: plan.billingMinimumSec,
      billingIncrementSec: plan.billingIncrementSec,
    });
    const estimatedCost = perCall.costPaisa * Math.max(input.leadCount, 0);

    if (wallet.balance < estimatedCost * 0.5) {
      throw new InsufficientBalanceError();
    }

    return {
      ok: true,
      warning: wallet.balance < estimatedCost,
      balance: wallet.balance,
      estimatedCost,
    };
  }
}

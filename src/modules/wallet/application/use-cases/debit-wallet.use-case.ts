import type { WalletRepository } from "../interfaces/wallet-repository.interface";
import type { PlanRepository } from "../../../plans/application/interfaces/plan-repository.interface";
import { calculateCallCost } from "../../../plans/domain/rules/billing-calculator";
import { TenantPlanNotFoundError } from "../../../plans/domain/errors/plan.errors";
import type { StopBatchesOnInsufficientBalanceUseCase } from "./stop-batches-on-insufficient-balance.use-case";
import type { CheckLowBalanceUseCase } from "./check-low-balance.use-case";

export interface DebitCallInput {
  tenantId: string;
  callId: string;
  bolnaCallId: string;
  durationSec: number;
}

export class DebitWalletForCallUseCase {
  constructor(
    private readonly walletRepo: WalletRepository,
    private readonly planRepo: PlanRepository,
    private readonly checkLowBalance: CheckLowBalanceUseCase,
    private readonly stopBatches: StopBatchesOnInsufficientBalanceUseCase,
  ) {}

  async execute(input: DebitCallInput): Promise<void> {
    if (input.durationSec <= 0) return;

    const plan = await this.planRepo.getActivePlanForTenant(input.tenantId);
    if (!plan || plan.status !== "ACTIVE") {
      throw new TenantPlanNotFoundError(input.tenantId);
    }

    const amount = calculateCallCost({
      durationSec: input.durationSec,
      perMinuteRate: plan.perMinuteRate,
      billingMinimumSec: plan.billingMinimumSec,
      billingIncrementSec: plan.billingIncrementSec,
    });

    if (amount <= 0) return;

    await this.walletRepo.debit({
      tenantId: input.tenantId,
      amount,
      description: `Call ${input.callId} (${input.durationSec}s)`,
      referenceType: "CALL",
      referenceId: `${input.callId}:${input.bolnaCallId}`,
    });

    await this.checkLowBalance.execute({ tenantId: input.tenantId });
    await this.stopBatches.execute({ tenantId: input.tenantId });
  }
}

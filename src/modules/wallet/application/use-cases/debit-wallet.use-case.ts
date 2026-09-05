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

// ── NEW ──────────────────────────────────────────────────────────
export interface DebitCallResult {
  amountPaisa: number;
  billableSeconds: number;
}
// ─────────────────────────────────────────────────────────────────

export class DebitWalletForCallUseCase {
  constructor(
    private readonly walletRepo: WalletRepository,
    private readonly planRepo: PlanRepository,
    private readonly checkLowBalance: CheckLowBalanceUseCase,
    private readonly stopBatches: StopBatchesOnInsufficientBalanceUseCase,
  ) {}

  async execute(input: DebitCallInput): Promise<DebitCallResult | null> {
    if (input.durationSec <= 0) return null;

    const plan = await this.planRepo.getActivePlanForTenant(input.tenantId);
    if (!plan || plan.status !== "ACTIVE") {
      throw new TenantPlanNotFoundError(input.tenantId);
    }

    // ── CHANGED: capture full breakdown ──────────────────────────
    const { billableSeconds, costPaisa } = calculateCallCost({
      durationSec: input.durationSec,
      perMinuteRate: plan.perMinuteRate,
      billingMinimumSec: plan.billingMinimumSec,
      billingIncrementSec: plan.billingIncrementSec,
    });

    if (costPaisa <= 0) return null;

    await this.walletRepo.debit({
      tenantId: input.tenantId,
      amount: costPaisa,
      description: `Call ${input.callId} (${billableSeconds}s billable)`,
      referenceType: "CALL",
      referenceId: `${input.callId}:${input.bolnaCallId}`,
    });

    await this.checkLowBalance.execute({ tenantId: input.tenantId });
    await this.stopBatches.execute({ tenantId: input.tenantId });

    return { amountPaisa: costPaisa, billableSeconds };
    // ─────────────────────────────────────────────────────────────
  }
}

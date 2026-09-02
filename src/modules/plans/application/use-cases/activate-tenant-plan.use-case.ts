import type { PlanRepository } from "../interfaces/plan-repository.interface";
import { PlanNotFoundError } from "../../domain/errors/plan.errors";

export interface ActivateTenantPlanInput {
  tenantId: string;
  planId: string;
}

export interface ActivateTenantPlanOutput {
  tenantId: string;
  planId: string;
  bonusExpiresAt: Date | null;
  includedBalance: number;
}

/**
 * Called after successful onboarding payment.
 * Sets TenantPlan to ACTIVE and returns bonus info so the Wallet
 * module (Sprint 2) can credit the included balance.
 */
export class ActivateTenantPlanUseCase {
  constructor(private readonly planRepo: PlanRepository) {}

  async execute(
    input: ActivateTenantPlanInput,
  ): Promise<ActivateTenantPlanOutput> {
    const plan = await this.planRepo.findById(input.planId);
    if (!plan) throw new PlanNotFoundError(input.planId);

    const bonusExpiresAt = plan.bonusValidityDays
      ? new Date(Date.now() + plan.bonusValidityDays * 24 * 60 * 60 * 1000)
      : null;

    await this.planRepo.activatePlan(
      input.tenantId,
      input.planId,
      bonusExpiresAt,
    );

    return {
      tenantId: input.tenantId,
      planId: input.planId,
      bonusExpiresAt,
      includedBalance: plan.includedBalance,
    };
  }
}

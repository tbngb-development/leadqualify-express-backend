import type { PlanRepository } from "../interfaces/plan-repository.interface";
import type { TenantPlanResponse } from "../dto/plan.dto";
import { TenantPlanNotFoundError } from "../../domain/errors/plan.errors";
import { toPlanResponse } from "../mappers/plan.mapper";

export class GetTenantPlanUseCase {
  constructor(private readonly planRepo: PlanRepository) {}

  async execute(tenantId: string): Promise<TenantPlanResponse> {
    const activePlan = await this.planRepo.getActivePlanForTenant(tenantId);
    if (!activePlan) throw new TenantPlanNotFoundError(tenantId);

    return {
      planId: activePlan.id,
      plan: toPlanResponse(activePlan),
      status: activePlan.status,
      activatedAt: activePlan.activatedAt?.toISOString() ?? null,
      bonusExpiresAt: activePlan.bonusExpiresAt?.toISOString() ?? null,
    };
  }
}

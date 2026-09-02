import type { PlanRepository } from "../interfaces/plan-repository.interface";
import type { PlanResponse } from "../dto/plan.dto";
import { PlanNotFoundError } from "../../domain/errors/plan.errors";
import { toPlanResponse } from "../mappers/plan.mapper";

export class GetPlanUseCase {
  constructor(private readonly planRepo: PlanRepository) {}

  async execute(planId: string): Promise<PlanResponse> {
    const plan = await this.planRepo.findById(planId);
    if (!plan) throw new PlanNotFoundError(planId);
    return toPlanResponse(plan);
  }
}

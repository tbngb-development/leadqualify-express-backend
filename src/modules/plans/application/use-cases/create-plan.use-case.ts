import type { PlanRepository } from "../interfaces/plan-repository.interface";
import type { CreatePlanInput, PlanResponse } from "../dto/plan.dto";
import { PlanSlugConflictError } from "../../domain/errors/plan.errors";
import { toPlanResponse } from "../mappers/plan.mapper";

export class CreatePlanUseCase {
  constructor(private readonly planRepo: PlanRepository) {}

  async execute(input: CreatePlanInput): Promise<PlanResponse> {
    const existing = await this.planRepo.findBySlug(input.slug);
    if (existing) throw new PlanSlugConflictError(input.slug);

    const created = await this.planRepo.create(input);
    return toPlanResponse(created);
  }
}

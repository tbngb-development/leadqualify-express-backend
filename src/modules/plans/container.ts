import { PrismaPlanRepository } from "./infrastructure/repositories/prisma-plan.repository";
import type { PlanRepository } from "./application/interfaces/plan-repository.interface";
import { ListPlansUseCase } from "./application/use-cases/list-plans.use-case";
import { GetPlanUseCase } from "./application/use-cases/get-plan.use-case";
import { GetTenantPlanUseCase } from "./application/use-cases/get-tenant-plan.use-case";
import { CreatePlanUseCase } from "./application/use-cases/create-plan.use-case";
import { UpdatePlanUseCase } from "./application/use-cases/update-plan.use-case";
import { ActivateTenantPlanUseCase } from "./application/use-cases/activate-tenant-plan.use-case";
import { AdminPlanController } from "./presentation/admin-plan.controller";
import { TenantPlanController } from "./presentation/tenant-plan.controller";

export interface PlanModule {
  repository: PlanRepository;
  useCases: {
    activateTenantPlan: ActivateTenantPlanUseCase;
  };
  adminController: AdminPlanController;
  tenantController: TenantPlanController;
}

export function buildPlanModule(): PlanModule {
  const repository = new PrismaPlanRepository();

  const listPlans = new ListPlansUseCase(repository);
  const getPlan = new GetPlanUseCase(repository);
  const getTenantPlan = new GetTenantPlanUseCase(repository);
  const createPlan = new CreatePlanUseCase(repository);
  const updatePlan = new UpdatePlanUseCase(repository);
  const activateTenantPlan = new ActivateTenantPlanUseCase(repository);

  return {
    repository,
    useCases: { activateTenantPlan },
    adminController: new AdminPlanController(
      listPlans,
      getPlan,
      createPlan,
      updatePlan,
    ),
    tenantController: new TenantPlanController(listPlans, getTenantPlan),
  };
}

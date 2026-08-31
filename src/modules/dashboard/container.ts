import { PrismaDashboardRepository } from "./infrastructure/repositories/prisma-dashboard.repository";
import { GetDashboardOverviewUseCase } from "./application/use-cases/get-dashboard-overview.use-case";
import { GetDashboardActivityUseCase } from "./application/use-cases/get-dashboard-activity.use-case";
import { GetDashboardCampaignsUseCase } from "./application/use-cases/get-dashboard-campaigns.use-case";
import { TenantDashboardController } from "./presentation/tenant-dashboard.controller";

export interface DashboardModule {
  tenantController: TenantDashboardController;
}

export function buildDashboardModule(): DashboardModule {
  const repo = new PrismaDashboardRepository();

  return {
    tenantController: new TenantDashboardController(
      new GetDashboardOverviewUseCase(repo),
      new GetDashboardActivityUseCase(repo),
      new GetDashboardCampaignsUseCase(repo),
    ),
  };
}

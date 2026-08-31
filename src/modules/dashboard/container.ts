import { PrismaDashboardRepository } from "./infrastructure/repositories/prisma-dashboard.repository";
import { PrismaAdminDashboardRepository } from "./infrastructure/repositories/prisma-admin-dashboard.repository";

import { GetDashboardOverviewUseCase } from "./application/use-cases/get-dashboard-overview.use-case";
import { GetDashboardActivityUseCase } from "./application/use-cases/get-dashboard-activity.use-case";
import { GetDashboardCampaignsUseCase } from "./application/use-cases/get-dashboard-campaigns.use-case";

import { GetAdminOverviewUseCase } from "./application/use-cases/get-admin-overview.use-case";
import { GetAdminTenantHealthUseCase } from "./application/use-cases/get-admin-tenant-health.use-case";
import { GetAdminActivityUseCase } from "./application/use-cases/get-admin-activity.use-case";

import { TenantDashboardController } from "./presentation/tenant-dashboard.controller";
import { AdminDashboardController } from "./presentation/admin-dashboard.controller";

export interface DashboardModule {
  tenantController: TenantDashboardController;
  adminController: AdminDashboardController;
}

export function buildDashboardModule(): DashboardModule {
  const tenantRepo = new PrismaDashboardRepository();
  const adminRepo = new PrismaAdminDashboardRepository();

  return {
    tenantController: new TenantDashboardController(
      new GetDashboardOverviewUseCase(tenantRepo),
      new GetDashboardActivityUseCase(tenantRepo),
      new GetDashboardCampaignsUseCase(tenantRepo),
    ),
    adminController: new AdminDashboardController(
      new GetAdminOverviewUseCase(adminRepo),
      new GetAdminTenantHealthUseCase(adminRepo),
      new GetAdminActivityUseCase(adminRepo),
    ),
  };
}

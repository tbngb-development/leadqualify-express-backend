import { type DashboardRepository } from "../interfaces/dashboard-repository.interface";
import { type DashboardOverviewOutput } from "../dto/dashboard.dto";

export class GetDashboardOverviewUseCase {
  constructor(private readonly dashboardRepo: DashboardRepository) {}

  execute(tenantId: string): Promise<DashboardOverviewOutput> {
    return this.dashboardRepo.getOverview(tenantId);
  }
}
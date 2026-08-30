import { DashboardRepository } from "../interfaces/dashboard-repository.interface";
import { CampaignPerformanceOutput } from "../dto/dashboard.dto";

export class GetDashboardCampaignsUseCase {
  constructor(private readonly dashboardRepo: DashboardRepository) {}

  execute(tenantId: string): Promise<CampaignPerformanceOutput[]> {
    return this.dashboardRepo.getCampaignPerformance(tenantId);
  }
}
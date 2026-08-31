import { type DashboardRepository } from "../interfaces/dashboard-repository.interface";
import { type DashboardActivityOutput } from "../dto/dashboard.dto";

export class GetDashboardActivityUseCase {
  constructor(private readonly dashboardRepo: DashboardRepository) {}

  execute(tenantId: string): Promise<DashboardActivityOutput> {
    return this.dashboardRepo.getActivity(tenantId);
  }
}
import type {
  AdminDashboardRepository,
  AdminOverviewStats,
} from "../interfaces/admin-dashboard-repository.interface";

export class GetAdminOverviewUseCase {
  constructor(private readonly dashboardRepo: AdminDashboardRepository) {}

  async execute(): Promise<AdminOverviewStats> {
    return this.dashboardRepo.getOverviewStats();
  }
}

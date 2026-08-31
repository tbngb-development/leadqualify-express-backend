import type {
  AdminDashboardRepository,
  TenantHealthMetric,
} from "../interfaces/admin-dashboard-repository.interface";

export class GetAdminTenantHealthUseCase {
  constructor(private readonly dashboardRepo: AdminDashboardRepository) {}

  async execute(): Promise<TenantHealthMetric[]> {
    return this.dashboardRepo.getTenantHealthMetrics();
  }
}

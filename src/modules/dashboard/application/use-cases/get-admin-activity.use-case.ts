import type {
  AdminDashboardRepository,
  PlatformActivityLog,
} from "../interfaces/admin-dashboard-repository.interface";

export class GetAdminActivityUseCase {
  constructor(private readonly dashboardRepo: AdminDashboardRepository) {}

  async execute(limit = 20): Promise<PlatformActivityLog[]> {
    return this.dashboardRepo.getPlatformActivity(limit);
  }
}

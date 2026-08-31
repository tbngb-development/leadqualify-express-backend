export interface AdminOverviewStats {
  totalTenants: number;
  activeTenants: number;
  totalCampaigns: number;
  totalCalls: number;
  totalDurationMinutes: number;
}

export interface TenantHealthMetric {
  tenantId: string;
  tenantName: string;
  isActive: boolean;
  totalCampaigns: number;
  totalCalls: number;
  completedCalls: number;
  failedCalls: number;
}

export interface PlatformActivityLog {
  id: string;
  tenantId: string;
  tenantName: string;
  type:
    "CAMPAIGN_STARTED" | "BATCH_COMPLETED" | "CALL_COMPLETED" | "CALL_FAILED";
  message: string;
  timestamp: Date;
}

export interface AdminDashboardRepository {
  getOverviewStats(): Promise<AdminOverviewStats>;
  getTenantHealthMetrics(): Promise<TenantHealthMetric[]>;
  getPlatformActivity(limit: number): Promise<PlatformActivityLog[]>;
}

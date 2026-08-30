import {
  DashboardOverviewOutput,
  DashboardActivityOutput,
  CampaignPerformanceOutput,
} from "../dto/dashboard.dto";

export interface DashboardRepository {
  getOverview(tenantId: string): Promise<DashboardOverviewOutput>;
  getActivity(tenantId: string): Promise<DashboardActivityOutput>;
  getCampaignPerformance(tenantId: string): Promise<CampaignPerformanceOutput[]>;
}
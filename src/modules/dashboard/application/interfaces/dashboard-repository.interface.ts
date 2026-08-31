import {
  type DashboardOverviewOutput,
  type DashboardActivityOutput,
  type CampaignPerformanceOutput,
} from "../dto/dashboard.dto";

export interface DashboardRepository {
  getOverview(tenantId: string): Promise<DashboardOverviewOutput>;
  getActivity(tenantId: string): Promise<DashboardActivityOutput>;
  getCampaignPerformance(tenantId: string): Promise<CampaignPerformanceOutput[]>;
}
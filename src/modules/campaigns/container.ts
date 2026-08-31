import { PrismaCampaignRepository } from "./infrastructure/repositories/prisma-campaign.repository";
import { PrismaBatchRepository } from "../batches/infrastructure/repositories/prisma-batch.repository";
import { ListCampaignsUseCase } from "./application/use-cases/list-campaigns.use-case";
import { GetCampaignUseCase } from "./application/use-cases/get-campaign.use-case";
import { CreateCampaignUseCase } from "./application/use-cases/create-campaign.use-case";
import { ParseLeadsUseCase } from "./application/use-cases/parse-leads.use-case";
import { GetCampaignStatsUseCase } from "./application/use-cases/get-campaign-stats.use-case";
import { GetCampaignPerformanceUseCase } from "./application/use-cases/get-campaign-performance.use-case";
import { TenantCampaignController } from "./presentation/tenant-campaign.controller";

export interface CampaignModule {
  tenantController: TenantCampaignController;
}

export function buildCampaignModule(): CampaignModule {
  const campaignRepo = new PrismaCampaignRepository();
  const batchRepo = new PrismaBatchRepository();

  return {
    tenantController: new TenantCampaignController(
      new ListCampaignsUseCase(campaignRepo),
      new GetCampaignUseCase(campaignRepo),
      new CreateCampaignUseCase(campaignRepo),
      new ParseLeadsUseCase(campaignRepo, batchRepo),
      new GetCampaignStatsUseCase(campaignRepo),
      new GetCampaignPerformanceUseCase(campaignRepo),
    ),
  };
}

import type { CampaignRepository } from "../interfaces/campaign-repository.interface";
import { CampaignNotFoundError } from "../../domain/errors/campaign.errors";

export class GetCampaignPerformanceUseCase {
  constructor(private readonly campaignRepo: CampaignRepository) {}

  async execute(tenantId: string, campaignId: string) {
    const perf = await this.campaignRepo.getPerformance(tenantId, campaignId);
    if (!perf) throw new CampaignNotFoundError();
    return perf;
  }
}

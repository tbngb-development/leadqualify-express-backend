import type { CampaignRepository } from "../interfaces/campaign-repository.interface";
import type { CampaignListItem } from "../interfaces/campaign-repository.interface";

export class ListCampaignsUseCase {
  constructor(private readonly campaignRepo: CampaignRepository) {}

  execute(tenantId: string): Promise<CampaignListItem[]> {
    return this.campaignRepo.list(tenantId);
  }
}

import { type BrochureRepository } from "../interfaces/brochure-repository.interface";
import {
  BrochureNotFoundError,
  BrochureInUseError,
} from "../../domain/errors/brochure.errors";

export class DeleteBrochureUseCase {
  constructor(private readonly brochureRepo: BrochureRepository) {}

  async execute(tenantId: string, id: string): Promise<void> {
    const brochure = await this.brochureRepo.findById(tenantId, id);
    if (!brochure) {
      throw new BrochureNotFoundError();
    }

    const campaignCount = await this.brochureRepo.getCampaignReferenceCount(id);
    if (campaignCount > 0) {
      throw new BrochureInUseError(campaignCount);
    }

    await this.brochureRepo.delete(tenantId, id);
  }
}

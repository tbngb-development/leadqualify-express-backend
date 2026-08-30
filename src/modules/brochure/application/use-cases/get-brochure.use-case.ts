import { BrochureRepository } from "../interfaces/brochure-repository.interface";
import { BrochureNotFoundError } from "../../domain/errors/brochure.errors";

export class GetBrochureUseCase {
  constructor(private readonly brochureRepo: BrochureRepository) {}

  async execute(tenantId: string, id: string) {
    const brochure = await this.brochureRepo.findByIdWithCampaigns(tenantId, id);
    if (!brochure) {
      throw new BrochureNotFoundError();
    }
    return brochure;
  }
}
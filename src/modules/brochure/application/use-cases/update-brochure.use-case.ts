import { BrochureRepository } from "../interfaces/brochure-repository.interface";
import { BrochureNotFoundError } from "../../domain/errors/brochure.errors";
import { BrochureEntityData } from "../../domain/entities/brochure.entity";

export class UpdateBrochureUseCase {
  constructor(private readonly brochureRepo: BrochureRepository) {}

  async execute(
    tenantId: string,
    id: string,
    data: Partial<
      Omit<BrochureEntityData, "id" | "tenantId" | "createdAt" | "updatedAt">
    >,
  ): Promise<BrochureEntityData> {
    const brochure = await this.brochureRepo.findById(tenantId, id);
    if (!brochure) {
      throw new BrochureNotFoundError();
    }
    return this.brochureRepo.update(tenantId, id, data);
  }
}

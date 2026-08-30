import {
  BrochureRepository,
  BrochureListItem,
} from "../interfaces/brochure-repository.interface";

export class ListBrochuresUseCase {
  constructor(private readonly brochureRepo: BrochureRepository) {}

  async execute(tenantId: string): Promise<BrochureListItem[]> {
    return this.brochureRepo.list(tenantId);
  }
}

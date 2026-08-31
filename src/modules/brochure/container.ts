import { PrismaBrochureRepository } from "./infrastructure/repositories/prisma-brochure.repository";
import { ExtractBrochureUseCase } from "./application/use-cases/extract-brochure.use-case";
import { SaveBrochureUseCase } from "./application/use-cases/save-brochure.use-case";
import { ListBrochuresUseCase } from "./application/use-cases/list-brochures.use-case";
import { GetBrochureUseCase } from "./application/use-cases/get-brochure.use-case";
import { UpdateBrochureUseCase } from "./application/use-cases/update-brochure.use-case";
import { DeleteBrochureUseCase } from "./application/use-cases/delete-brochure.use-case";
import { TenantBrochureController } from "./presentation/tenant-brochure.controller";

export interface BrochureModule {
  tenantController: TenantBrochureController;
}

export function buildBrochureModule(): BrochureModule {
  const repo = new PrismaBrochureRepository();

  return {
    tenantController: new TenantBrochureController(
      new ExtractBrochureUseCase(),
      new SaveBrochureUseCase(repo),
      new ListBrochuresUseCase(repo),
      new GetBrochureUseCase(repo),
      new UpdateBrochureUseCase(repo),
      new DeleteBrochureUseCase(repo),
    ),
  };
}

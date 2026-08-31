import { PrismaBatchRepository } from "./infrastructure/repositories/prisma-batch.repository";
import { PrismaCampaignRepository } from "../campaigns/infrastructure/repositories/prisma-campaign.repository";
import { BolnaBatchProviderImpl } from "./infrastructure/bolna-batch-provider";
import { CloudinaryStorageProvider } from "../../shared/config/external/storage/cloudinary.storage";
import { ListBatchesUseCase } from "./application/use-cases/list-batches.use-case";
import { GetBatchUseCase } from "./application/use-cases/get-batch.use-case";
import { CreateBatchUseCase } from "./application/use-cases/create-batch.use-case";
import { RunBatchUseCase } from "./application/use-cases/run-batch.use-case";
import { ScheduleBatchUseCase } from "./application/use-cases/schedule-batch.use-case";
import { StopBatchUseCase } from "./application/use-cases/stop-batch.use-case";
import { ResumeBatchUseCase } from "./application/use-cases/resume-batch.use-case";
import { DeleteBatchUseCase } from "./application/use-cases/delete-batch.use-case";
import { GetBatchStatsUseCase } from "./application/use-cases/get-batch-stats.use-case";
import { TenantBatchController } from "./presentation/tenant-batch.controller";
import { AdminBatchController } from "./presentation/admin-batch.controller";

export interface BatchModule {
  tenantController: TenantBatchController;
  adminController: AdminBatchController;
}

export function buildBatchModule(): BatchModule {
  const batchRepo = new PrismaBatchRepository();
  const campaignRepo = new PrismaCampaignRepository();
  const storage = new CloudinaryStorageProvider();
  const bolna = new BolnaBatchProviderImpl();

  const listBatches = new ListBatchesUseCase(batchRepo, campaignRepo);
  const getBatch = new GetBatchUseCase(batchRepo);
  const getBatchStats = new GetBatchStatsUseCase(batchRepo);

  return {
    tenantController: new TenantBatchController(
      listBatches,
      getBatch,
      new CreateBatchUseCase(batchRepo, campaignRepo, storage, bolna),
      new RunBatchUseCase(batchRepo, campaignRepo, bolna),
      new ScheduleBatchUseCase(batchRepo, campaignRepo, bolna),
      new StopBatchUseCase(batchRepo, campaignRepo, bolna),
      new ResumeBatchUseCase(batchRepo, campaignRepo, storage, bolna),
      new DeleteBatchUseCase(batchRepo, bolna),
      getBatchStats,
    ),
    adminController: new AdminBatchController(
      listBatches,
      getBatch,
      getBatchStats,
    ),
  };
}

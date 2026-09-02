import type { BatchRepository } from "../interfaces/batch-repository.interface";
import type { CampaignRepository } from "../../../campaigns/application/interfaces/campaign-repository.interface";
import type { BolnaBatchProvider } from "../../infrastructure/bolna-batch-provider.interface";
import {
  BatchNotFoundError,
  BatchOperationError,
  BatchNoBolnaIdError,
} from "../../domain/errors/batch.errors";
import {
  toBolnaISO,
  parseBolnaScheduledTime,
} from "../../../../shared/utils/bolna-date";

export class RunBatchUseCase {
  constructor(
    private readonly batchRepo: BatchRepository,
    private readonly campaignRepo: CampaignRepository,
    private readonly bolnaProvider: BolnaBatchProvider,
  ) {}

  async execute(tenantId: string, campaignId: string, batchId: string) {
    const batchData = await this.batchRepo.findById(
      tenantId,
      campaignId,
      batchId,
    );
    if (!batchData) throw new BatchNotFoundError();
    if (batchData.status !== "CREATED") {
      throw new BatchOperationError(
        `Cannot run batch in "${batchData.status}" status.`,
      );
    }
    if (!batchData.bolnaBatchId) throw new BatchNoBolnaIdError();

    const scheduledAt = new Date(Date.now() + 2 * 60 * 1000);
    const isoString = toBolnaISO(scheduledAt);

    const bolnaResult = await this.bolnaProvider.scheduleBatch(
      tenantId,
      batchData.bolnaBatchId,
      isoString,
    );

    const bolnaScheduledAt = parseBolnaScheduledTime(bolnaResult.state);

    const updatedBatch = await this.batchRepo.update(batchId, {
      status: "SCHEDULED",
      scheduledAt,
      bolnaScheduledAt,
    });

    // Transition campaign to RUNNING if DRAFT
    const campaign = await this.campaignRepo.findById(tenantId, campaignId);
    if (campaign && campaign.status === "DRAFT") {
      await this.campaignRepo.updateStatus(campaignId, "RUNNING", {
        startedAt: new Date(),
      });
    }

    return {
      batch: updatedBatch,
      message: `Batch scheduled. Bolna will start at ${bolnaScheduledAt ?? isoString}`,
    };
  }
}

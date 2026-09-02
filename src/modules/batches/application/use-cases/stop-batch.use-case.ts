import type { BatchRepository } from "../interfaces/batch-repository.interface";
import type { CampaignRepository } from "../../../campaigns/application/interfaces/campaign-repository.interface";
import type { BolnaBatchProvider } from "../../infrastructure/bolna-batch-provider.interface";
import {
  BatchNotFoundError,
  BatchOperationError,
} from "../../domain/errors/batch.errors";
import { isBatchTerminal } from "../../domain/entities/batch-status.rules";

export class StopBatchUseCase {
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
    if (batchData.status !== "SCHEDULED" && batchData.status !== "RUNNING") {
      throw new BatchOperationError(
        `Cannot stop batch in "${batchData.status}" status.`,
      );
    }

    if (batchData.bolnaBatchId) {
      try {
        await this.bolnaProvider.stopBatch(tenantId, batchData.bolnaBatchId);
      } catch (err) {
        console.warn("[StopBatch] Bolna stop error:", err);
      }
    }

    const updatedBatch = await this.batchRepo.update(batchId, {
      status: "STOPPED",
    });

    await this.batchRepo.resetActiveLeadsToPending(batchId);
    await this.batchRepo.failActiveCalls(batchId);
    await this.checkAndUpdateCampaignStatus(campaignId);

    return {
      batch: updatedBatch,
      warning:
        "Batch stopped. Non-completed calls reset to PENDING for resume.",
    };
  }

  private async checkAndUpdateCampaignStatus(
    campaignId: string,
  ): Promise<void> {
    const statuses = await this.batchRepo.getAllBatchStatuses(campaignId);
    if (statuses.length === 0) return;

    const allTerminal = statuses.every(isBatchTerminal);
    const anyActive = statuses.some(
      (s) => s === "RUNNING" || s === "SCHEDULED",
    );

    if (allTerminal) {
      const allFailed = statuses.every((s) => s === "FAILED");
      await this.campaignRepo.updateStatus(
        campaignId,
        allFailed ? "FAILED" : "COMPLETED",
        { completedAt: new Date() },
      );
    } else if (!anyActive) {
      await this.campaignRepo.updateStatus(campaignId, "DRAFT");
    }
  }
}

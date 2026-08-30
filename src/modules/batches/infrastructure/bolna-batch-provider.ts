import { bolnaClient } from "../../../shared/config/external/bolna/bolna.client";
import type {
  BolnaBatchCreateParams,
  BolnaBatchCreateResult,
  BolnaBatchProvider,
  BolnaBatchScheduleResult,
} from "./bolna-batch-provider.interface";

export class BolnaBatchProviderImpl implements BolnaBatchProvider {
  async create(
    params: BolnaBatchCreateParams,
  ): Promise<BolnaBatchCreateResult> {
    const response = await bolnaClient.batches.create({
      agentId: params.agentId,
      csvBuffer: params.csvBuffer,
      fileName: params.fileName,
      retryConfig: params.retryConfig,
      webhookUrl: params.webhookUrl,
    });

    return { batchId: response.batch_id };
  }

  async schedule(
    bolnaBatchId: string,
    scheduledAt: string,
  ): Promise<BolnaBatchScheduleResult> {
    const response = await bolnaClient.batches.schedule(
      bolnaBatchId,
      scheduledAt,
    );

    return { message: response.message, state: response.state };
  }

  async stop(bolnaBatchId: string): Promise<void> {
    await bolnaClient.batches.stop(bolnaBatchId);
  }

  async delete(bolnaBatchId: string): Promise<void> {
    await bolnaClient.batches.delete(bolnaBatchId);
  }
}

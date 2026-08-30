import type { RetryConfig } from "../../../shared/types/bolna.types";

export interface BolnaBatchCreateParams {
  agentId: string;
  csvBuffer: Buffer;
  fileName: string;
  retryConfig?: RetryConfig;
  webhookUrl?: string;
}

export interface BolnaBatchCreateResult {
  batchId: string;
}

export interface BolnaBatchScheduleResult {
  message: string;
  state: string;
}

export interface BolnaBatchProvider {
  create(params: BolnaBatchCreateParams): Promise<BolnaBatchCreateResult>;
  schedule(
    bolnaBatchId: string,
    scheduledAt: string,
  ): Promise<BolnaBatchScheduleResult>;
  stop(bolnaBatchId: string): Promise<void>;
  delete(bolnaBatchId: string): Promise<void>;
}
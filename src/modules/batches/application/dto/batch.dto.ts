import type { RetryConfig } from "../../../../shared/types/bolna.types";

export interface CreateBatchInput {
  tenantId: string;
  campaignId: string;
  fileBuffer: Buffer;
  fileName: string;
  retryConfig?: RetryConfig;
}

export interface CreateBatchOutput {
  batch: Record<string, unknown>;
  stats: {
    totalRows: number;
    validIndian: number;
    filteredNonIndian: number;
    imported: number;
  };
}

export interface ScheduleBatchInput {
  tenantId: string;
  campaignId: string;
  batchId: string;
  scheduledAt: string;
}

export interface ResumeBatchOutput {
  originalBatchId: string;
  newBatch: Record<string, unknown>;
  remainingLeads: number;
  message: string;
}
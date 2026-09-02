import axios, { type AxiosInstance } from "axios";
import FormData from "form-data";
import { normalizePhoneNumber } from "../../../../modules/leads/domain/rules/phone.rules";
import type {
  BolnaAgentResponse,
  BolnaCallPayload,
  BolnaCallResponse,
  BolnaBatchResponse,
  BolnaBatchScheduleResponse,
  BolnaBatchStatus,
  BolnaExecution,
  RetryConfig,
} from "../../../types/bolna.types";

export interface CreateBatchParams {
  agentId: string;
  csvBuffer: Buffer;
  fileName: string;
  retryConfig?: RetryConfig;
  webhookUrl?: string;
  fromPhoneNumbers?: string[];
}

export interface IBolnaClient {
  calls: {
    create(payload: BolnaCallPayload): Promise<BolnaCallResponse>;
  };
  agents: {
    verify(agentId: string): Promise<BolnaAgentResponse>;
    list(): Promise<BolnaAgentResponse[]>;
  };
  batches: {
    create(params: CreateBatchParams): Promise<BolnaBatchResponse>;
    schedule(
      bolnaBatchId: string,
      scheduledAt: string,
    ): Promise<BolnaBatchScheduleResponse>;
    stop(bolnaBatchId: string): Promise<{ message: string; state: "stopped" }>;
    get(bolnaBatchId: string): Promise<BolnaBatchStatus>;
    getExecutions(bolnaBatchId: string): Promise<BolnaExecution[]>;
    delete(
      bolnaBatchId: string,
    ): Promise<{ message: string; state: "deleted" }>;
  };
}

export class BolnaClient implements IBolnaClient {
  private readonly http: AxiosInstance;
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    if (!apiKey) throw new Error("BolnaClient requires an API key.");
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.http = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      timeout: 30_000,
    });
  }

  calls = {
    create: async (payload: BolnaCallPayload): Promise<BolnaCallResponse> => {
      const normalizedPhone = normalizePhoneNumber(
        payload.recipient_phone_number,
      );
      const response = await this.http.post<BolnaCallResponse>("/call", {
        ...payload,
        recipient_phone_number: normalizedPhone,
      });
      return response.data;
    },
  };

  agents = {
    verify: async (agentId: string): Promise<BolnaAgentResponse> => {
      const response = await this.http.get<BolnaAgentResponse>(
        `/v2/agent/${agentId}`,
      );
      return response.data;
    },

    list: async (): Promise<BolnaAgentResponse[]> => {
      const response =
        await this.http.get<BolnaAgentResponse[]>("/v2/agent/all");
      return response.data;
    },
  };

  batches = {
    create: async (params: CreateBatchParams): Promise<BolnaBatchResponse> => {
      const form = new FormData();
      form.append("agent_id", params.agentId);
      form.append("file", params.csvBuffer, {
        filename: params.fileName,
        contentType: "text/csv",
      });

      if (params.webhookUrl) {
        form.append("webhook_url", params.webhookUrl);
      }

      if (params.fromPhoneNumbers?.length) {
        for (const phone of params.fromPhoneNumbers) {
          form.append("from_phone_numbers", normalizePhoneNumber(phone));
        }
      }

      if (params.retryConfig?.enabled) {
        const payloadRetry = {
          enabled: true,
          max_retries: params.retryConfig.max_retries,
          retry_on_statuses: params.retryConfig.retry_on_statuses ?? [
            "no-answer",
            "busy",
            "failed",
          ],
          retry_on_voicemail: params.retryConfig.retry_on_voicemail ?? false,
          retry_intervals_minutes: params.retryConfig
            .retry_intervals_minutes ?? [15, 30],
        };
        form.append("retry_config", JSON.stringify(payloadRetry));
      }

      const response = await axios.post<BolnaBatchResponse>(
        `${this.baseUrl}/batches`,
        form,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            ...form.getHeaders(),
          },
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
        },
      );
      return response.data;
    },

    schedule: async (
      bolnaBatchId: string,
      scheduledAt: string,
    ): Promise<BolnaBatchScheduleResponse> => {
      const form = new FormData();
      form.append("scheduled_at", scheduledAt);

      const response = await axios.post<BolnaBatchScheduleResponse>(
        `${this.baseUrl}/batches/${bolnaBatchId}/schedule`,
        form,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            ...form.getHeaders(),
          },
        },
      );
      return response.data;
    },

    stop: async (bolnaBatchId: string) => {
      const response = await this.http.post<{
        message: string;
        state: "stopped";
      }>(`/batches/${bolnaBatchId}/stop`);
      return response.data;
    },

    get: async (bolnaBatchId: string): Promise<BolnaBatchStatus> => {
      const response = await this.http.get<BolnaBatchStatus>(
        `/batches/${bolnaBatchId}`,
      );
      return response.data;
    },

    getExecutions: async (bolnaBatchId: string): Promise<BolnaExecution[]> => {
      const response = await this.http.get<BolnaExecution[]>(
        `/batches/${bolnaBatchId}/executions`,
      );
      return response.data;
    },

    delete: async (bolnaBatchId: string) => {
      const response = await this.http.delete<{
        message: string;
        state: "deleted";
      }>(`/batches/${bolnaBatchId}`);
      return response.data;
    },
  };
}

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

const BOLNA_BASE_URL = "https://api.bolna.ai";

// ── HTTP Client Factory ──────────────────────────────────────────────────────

function createHttpClient(): AxiosInstance {
  const apiKey = process.env.BOLNA_API_KEY;
  if (!apiKey) {
    throw new Error("BOLNA_API_KEY is not set in environment variables");
  }

  return axios.create({
    baseURL: BOLNA_BASE_URL,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    timeout: 30_000,
  });
}

function getApiKey(): string {
  const apiKey = process.env.BOLNA_API_KEY;
  if (!apiKey) throw new Error("BOLNA_API_KEY not configured.");
  return apiKey;
}

// ── Bolna Client ─────────────────────────────────────────────────────────────

export const bolnaClient = {
  // ── Calls ────────────────────────────────────────────────────────────────

  calls: {
    async create(payload: BolnaCallPayload): Promise<BolnaCallResponse> {
      const http = createHttpClient();
      const normalizedPhone = normalizePhoneNumber(
        payload.recipient_phone_number,
      );

      console.log(
        `[Bolna] Initiating call → agent: ${payload.agent_id} | phone: ${normalizedPhone}`,
      );

      const response = await http.post<BolnaCallResponse>("/call", {
        ...payload,
        recipient_phone_number: normalizedPhone,
      });

      return response.data;
    },
  },

  // ── Agents ───────────────────────────────────────────────────────────────

  agents: {
    async verify(agentId: string): Promise<BolnaAgentResponse> {
      const http = createHttpClient();
      const response = await http.get<BolnaAgentResponse>(
        `/v2/agent/${agentId}`,
      );
      return response.data;
    },

    async list(): Promise<BolnaAgentResponse[]> {
      const http = createHttpClient();
      const response = await http.get<BolnaAgentResponse[]>("/v2/agent/all");
      return response.data;
    },
  },

  // ── Batches ──────────────────────────────────────────────────────────────

  batches: {
    async create(params: {
      agentId: string;
      csvBuffer: Buffer;
      fileName: string;
      retryConfig?: RetryConfig;
      webhookUrl?: string;
      fromPhoneNumbers?: string[];
    }): Promise<BolnaBatchResponse> {
      const apiKey = getApiKey();
      const form = new FormData();

      form.append("agent_id", params.agentId);
      form.append("file", params.csvBuffer, {
        filename: params.fileName,
        contentType: "text/csv",
      });

      if (params.webhookUrl) {
        form.append("webhook_url", params.webhookUrl);
      }

      if (params.fromPhoneNumbers && params.fromPhoneNumbers.length > 0) {
        for (const phone of params.fromPhoneNumbers) {
          form.append("from_phone_numbers", normalizePhoneNumber(phone));
        }
      }

      if (params.retryConfig && params.retryConfig.enabled) {
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
        `${BOLNA_BASE_URL}/batches`,
        form,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            ...form.getHeaders(),
          },
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
        },
      );

      return response.data;
    },

    async schedule(
      bolnaBatchId: string,
      scheduledAt: string,
    ): Promise<BolnaBatchScheduleResponse> {
      const apiKey = getApiKey();
      const form = new FormData();
      form.append("scheduled_at", scheduledAt);

      const response = await axios.post<BolnaBatchScheduleResponse>(
        `${BOLNA_BASE_URL}/batches/${bolnaBatchId}/schedule`,
        form,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            ...form.getHeaders(),
          },
        },
      );

      return response.data;
    },

    async stop(
      bolnaBatchId: string,
    ): Promise<{ message: string; state: "stopped" }> {
      const http = createHttpClient();
      const response = await http.post<{ message: string; state: "stopped" }>(
        `/batches/${bolnaBatchId}/stop`,
      );
      return response.data;
    },

    async get(bolnaBatchId: string): Promise<BolnaBatchStatus> {
      const http = createHttpClient();
      const response = await http.get<BolnaBatchStatus>(
        `/batches/${bolnaBatchId}`,
      );
      return response.data;
    },

    async getExecutions(bolnaBatchId: string): Promise<BolnaExecution[]> {
      const http = createHttpClient();
      const response = await http.get<BolnaExecution[]>(
        `/batches/${bolnaBatchId}/executions`,
      );
      return response.data;
    },

    async delete(
      bolnaBatchId: string,
    ): Promise<{ message: string; state: "deleted" }> {
      const http = createHttpClient();
      const response = await http.delete<{
        message: string;
        state: "deleted";
      }>(`/batches/${bolnaBatchId}`);
      return response.data;
    },
  },
};

import axios, { AxiosInstance } from "axios";
import FormData from "form-data";
import {
  BolnaAgentResponse,
  BolnaCallPayload,
  BolnaCallResponse,
  BolnaBatchResponse,
  BolnaBatchScheduleResponse,
  BolnaBatchStatus,
  BolnaExecution,
  RetryConfig,
} from "../types/bolna.types";

const BOLNA_BASE_URL = "https://api.bolna.ai";

// ─── HTTP Client ──────────────────────────────────────────────────────────────

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
    timeout: 30000,
  });
}

// ─── Phone Normalizer ─────────────────────────────────────────────────────────
/**
 * Ensures phone number has a country code prefix.
 *
 * Rules:
 *  - Already has "+" prefix          → return as-is
 *  - 10-digit Indian number           → prepend "+91"
 *  - 12-digit starting with "91"      → prepend "+"
 *  - Anything else                    → prepend "+" and hope for the best
 *
 * Strips all spaces, dashes, parentheses before processing.
 */
export const normalizePhoneNumber = (
  raw: string,
  defaultCountryCode = "91",
): string => {
  // Strip whitespace, dashes, dots, parentheses
  const cleaned = raw.replace(/[\s\-().]/g, "");

  // Already has "+" — trust the caller
  if (cleaned.startsWith("+")) {
    return cleaned;
  }

  // Starts with "00" — international dialing prefix
  if (cleaned.startsWith("00")) {
    return `+${cleaned.slice(2)}`;
  }

  // 12 digits starting with "91" — Indian number without "+"
  if (cleaned.length === 12 && cleaned.startsWith("91")) {
    return `+${cleaned}`;
  }

  // 10 digits — bare Indian mobile number
  if (cleaned.length === 10) {
    return `+${defaultCountryCode}${cleaned}`;
  }

  // Fallback — prepend "+" and send
  console.warn(`[Bolna] Ambiguous phone "${raw}" → sending as "+${cleaned}"`);
  return `+${cleaned}`;
};

// ─── Bolna Client ─────────────────────────────────────────────────────────────

export const bolnaClient = {
  // ── Calls ──────────────────────────────────────────────────────────────────
  calls: {
    create: async (payload: BolnaCallPayload): Promise<BolnaCallResponse> => {
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

      console.log(
        `[Bolna] Call Response Data: ${JSON.stringify(response.data)}`,
      );
      return response.data;
    },
  },

  // ── Agents — only verify, no create/update/delete ─────────────────────────
  agents: {
    verify: async (agentId: string): Promise<BolnaAgentResponse> => {
      const http = createHttpClient();
      const response = await http.get<BolnaAgentResponse>(
        `/v2/agent/${agentId}`,
      );
      return response.data;
    },

    list: async (): Promise<BolnaAgentResponse[]> => {
      const http = createHttpClient();
      const response = await http.get<BolnaAgentResponse[]>("/v2/agent/all");
      return response.data;
    },
  },

  // ── V1 Batches (NEW IMPLEMENTATION) ────────────────────────────────────────
  batches: {
    /**
     * Creates a campaign batch on Bolna by uploading our normalized CSV asset.
     * Webhook URL must direct to our incoming API gateway interface.
     */
    create: async (params: {
      agentId: string;
      csvBuffer: Buffer;
      fileName: string;
      retryConfig?: RetryConfig;
      webhookUrl?: string;
      fromPhoneNumbers?: string[];
    }): Promise<BolnaBatchResponse> => {
      const apiKey = process.env.BOLNA_API_KEY;
      if (!apiKey) throw new Error("BOLNA_API_KEY not configured.");

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
        params.fromPhoneNumbers.forEach((phone) => {
          form.append("from_phone_numbers", normalizePhoneNumber(phone));
        });
      }

      if (params.retryConfig && params.retryConfig.enabled) {
        const payloadRetry = {
          enabled: true,
          max_retries: params.retryConfig.max_retries,
          retry_on_statuses: params.retryConfig.retry_on_statuses || [
            "no-answer",
            "busy",
            "failed",
          ],
          retry_on_voicemail: params.retryConfig.retry_on_voicemail || false,
          retry_intervals_minutes: params.retryConfig
            .retry_intervals_minutes || [15, 30],
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

    /**
     * Schedules a batch to run on a targeted date.
     * Uses numeric UTC offset formats to prevent 500 rejection crashes.
     */
    schedule: async (
      bolnaBatchId: string,
      scheduledAt: string, // ISO 8601 with timezone (e.g. "2026-06-23T18:30:00+05:30")
    ): Promise<BolnaBatchScheduleResponse> => {
      const http = createHttpClient();

      const form = new FormData();
      form.append("scheduled_at", scheduledAt);

      const apiKey = process.env.BOLNA_API_KEY;
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

    /**
     * Stops a currently running batch immediately on the Bolna telephony node.
     */
    stop: async (
      bolnaBatchId: string,
    ): Promise<{ message: string; state: "stopped" }> => {
      const http = createHttpClient();
      const response = await http.post<{ message: string; state: "stopped" }>(
        `/batches/${bolnaBatchId}/stop`,
      );
      return response.data;
    },

    /**
     * Queries batch configurations and current metrics directly from Bolna.
     */
    get: async (bolnaBatchId: string): Promise<BolnaBatchStatus> => {
      const http = createHttpClient();
      const response = await http.get<BolnaBatchStatus>(
        `/batches/${bolnaBatchId}`,
      );
      return response.data;
    },

    /**
     * Lists current executions (individual calls) inside a batch.
     */
    getExecutions: async (bolnaBatchId: string): Promise<BolnaExecution[]> => {
      const http = createHttpClient();
      const response = await http.get<BolnaExecution[]>(
        `/batches/${bolnaBatchId}/executions`,
      );
      return response.data;
    },

    /**
     * Deletes a batch resource definition.
     */
    delete: async (
      bolnaBatchId: string,
    ): Promise<{ message: string; state: "deleted" }> => {
      const http = createHttpClient();
      const response = await http.delete<{ message: string; state: "deleted" }>(
        `/batches/${bolnaBatchId}`,
      );
      return response.data;
    },
  },
};

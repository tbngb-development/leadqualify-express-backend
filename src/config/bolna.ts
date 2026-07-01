// src/config/bolna.ts

import axios, { AxiosInstance } from "axios";
import {
  BolnaAgentResponse,
  BolnaCallPayload,
  BolnaCallResponse,
} from "../types/bolna.types";

const BOLNA_BASE_URL = "https://api.bolna.dev";

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

// ─── Bolna Client — only what we actually use ─────────────────────────────────

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
    // Used to verify the agent_id exists in Bolna before saving
    verify: async (agentId: string): Promise<BolnaAgentResponse> => {
      const http = createHttpClient();

      const response = await http.get<BolnaAgentResponse>(`/agent/${agentId}`);

      return response.data;
    },

    // List all agents in Bolna dashboard — useful for dropdown in frontend
    list: async (): Promise<BolnaAgentResponse[]> => {
      const http = createHttpClient();
      const response = await http.get<BolnaAgentResponse[]>("/agent/all");
      return response.data;
    },
  },
};

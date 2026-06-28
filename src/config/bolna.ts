// src/config/bolna.ts

import axios, { AxiosInstance } from "axios";
import { BolnaAgentResponse, BolnaCallPayload, BolnaCallResponse } from "../types/bolna.types";

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

// ─── Bolna Client — only what we actually use ─────────────────────────────────

export const bolnaClient = {
  // ── Calls ──────────────────────────────────────────────────────────────────
  calls: {
    create: async (payload: BolnaCallPayload): Promise<BolnaCallResponse> => {
      const http = createHttpClient();

      console.log(
        `[Bolna] Initiating call → agent: ${payload.agent_id} | phone: ${payload.recipient_phone_number}`,
      );

      const response = await http.post<BolnaCallResponse>("/call", payload);

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

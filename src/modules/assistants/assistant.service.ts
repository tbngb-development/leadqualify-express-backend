// src/modules/assistants/assistant.service.ts

import prisma from "../../config/database";
import { bolnaClient } from "../../config/bolna";

export class AssistantService {
  // ─── List — all assistants for tenant ─────────────────────────────────────
  async list(tenantId: string) {
    return prisma.assistant.findMany({
      where: { tenantId },
      orderBy: { createdAt: "desc" },
    });
  }

  // ─── Get — single assistant ────────────────────────────────────────────────
  async get(tenantId: string, id: string) {
    const assistant = await prisma.assistant.findFirst({
      where: { id, tenantId },
    });
    if (!assistant) throw new Error("Assistant not found");
    return assistant;
  }

  // ─── Register — store a Bolna agent ID that's already configured ───────────
  // No API creation — agent is fully configured in Bolna dashboard
  async register(
    tenantId: string,
    data: {
      name: string; // friendly name for your system
      bolnaId: string; // agent_id from Bolna dashboard
    },
  ) {
    // ── Verify agent exists in Bolna before saving ──────────────────────────
    let bolnaAgent;
    try {
      bolnaAgent = await bolnaClient.agents.verify(data.bolnaId);
      console.log(
        `[AssistantService] Verified Bolna agent: ${bolnaAgent.agent_id} (${bolnaAgent.agent_name})`,
      );
    } catch (error: any) {
      if (error.response?.status === 404) {
        throw new Error(
          `Bolna agent not found: ${data.bolnaId}. Check the agent ID in your Bolna dashboard.`,
        );
      }
      throw new Error(`Failed to verify Bolna agent: ${error.message}`);
    }

    // ── Check if already registered by this tenant ──────────────────────────
    const existing = await prisma.assistant.findFirst({
      where: { bolnaId: data.bolnaId, tenantId },
    });

    if (existing) {
      throw new Error(
        `This Bolna agent is already registered as "${existing.name}"`,
      );
    }

    // ── Save to DB ────────────────────────────────────────────────────────────
    return prisma.assistant.create({
      data: {
        bolnaId: data.bolnaId,
        name: data.name,
        tenantId,
        config: bolnaAgent as object, // store full Bolna agent config
      },
    });
  }

  // ─── Update — only update the friendly name in our system ─────────────────
  // Prompt/voice changes are done directly in Bolna dashboard
  async update(tenantId: string, id: string, data: { name?: string }) {
    const assistant = await prisma.assistant.findFirst({
      where: { id, tenantId },
    });
    if (!assistant) throw new Error("Assistant not found");

    return prisma.assistant.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        updatedAt: new Date(),
      },
    });
  }

  // ─── Sync — re-fetch config from Bolna dashboard and update DB ─────────────
  // Useful if user updated the agent in Bolna dashboard
  async sync(tenantId: string, id: string) {
    const assistant = await prisma.assistant.findFirst({
      where: { id, tenantId },
    });
    if (!assistant) throw new Error("Assistant not found");

    const bolnaAgent = await bolnaClient.agents.verify(assistant.bolnaId);

    return prisma.assistant.update({
      where: { id },
      data: {
        config: bolnaAgent as object,
        updatedAt: new Date(),
      },
    });
  }

  // ─── Delete — remove from our DB only, not from Bolna dashboard ───────────
  async delete(tenantId: string, id: string) {
    const assistant = await prisma.assistant.findFirst({
      where: { id, tenantId },
    });
    if (!assistant) throw new Error("Assistant not found");

    // Check if any campaigns use this assistant
    const campaignCount = await prisma.campaign.count({
      where: { assistantId: id },
    });

    if (campaignCount > 0) {
      throw new Error(
        `Cannot delete — assistant is linked to ${campaignCount} campaign(s)`,
      );
    }

    return prisma.assistant.delete({ where: { id } });
  }

  // ─── List Bolna Agents — fetch all from dashboard ─────────────────────────
  // Useful for frontend dropdown when registering
  async listBolnaAgents() {
    return bolnaClient.agents.list();
  }
}

export default new AssistantService();

import prisma from "../../config/database";
import { vapiClient } from "../../config/vapi";
import { Vapi } from "@vapi-ai/server-sdk";

export class AssistantService {
  async list(tenantId: string) {
    return prisma.assistant.findMany({
      where: { tenantId },
      orderBy: { createdAt: "desc" },
    });
  }

  async get(tenantId: string, id: string) {
    const assistant = await prisma.assistant.findFirst({
      where: { id, tenantId },
    });
    if (!assistant) throw new Error("Assistant not found");
    return assistant;
  }

  async create(
    tenantId: string,
    data: {
      name: string;
      firstMessage: string;
      systemPrompt: string;
      voice?: { provider: string; voiceId: string };
    },
  ) {
    const vapiAssistant = await vapiClient.assistants.create({
      name: data.name,
      firstMessage: data.firstMessage,

      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: data.systemPrompt,
          },
        ],
      },

      voice: {
        provider: "custom-voice",

        server: {
          url: `https://choice-creatable-facility.ngrok-free.dev/api/tts`,
        },
      },
    });

    if (!vapiAssistant.id) throw new Error("Vapi assistant creation failed");

    console.log("CREATED VOICE:", JSON.stringify(vapiAssistant.voice, null, 2));
    console.log(JSON.stringify(vapiAssistant.voice, null, 2));

    return prisma.assistant.create({
      data: {
        vapiId: vapiAssistant.id,
        name: data.name,
        tenantId,
        config: vapiAssistant as object,
      },
    });
  }

  async update(
    tenantId: string,
    id: string,
    data: {
      name?: string;
      firstMessage?: string;
      systemPrompt?: string;
    },
  ) {
    const assistant = await prisma.assistant.findFirst({
      where: { id, tenantId },
    });
    if (!assistant) throw new Error("Assistant not found");

    // ✅ Build payload
    const updatePayload: Vapi.UpdateAssistantDto = {
      id: assistant.vapiId,
    };

    if (data.name) {
      updatePayload.name = data.name;
    }

    if (data.firstMessage) {
      updatePayload.firstMessage = data.firstMessage;
    }

    if (data.systemPrompt) {
      updatePayload.model = {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: data.systemPrompt,
          },
        ],
      };
    }

    // ✅ Correct — id inside request object
    await vapiClient.assistants.update(updatePayload);

    return prisma.assistant.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        updatedAt: new Date(),
      },
    });
  }

  async delete(tenantId: string, id: string) {
    const assistant = await prisma.assistant.findFirst({
      where: { id, tenantId },
    });
    if (!assistant) throw new Error("Assistant not found");

    await vapiClient.assistants.delete({ id: assistant.vapiId });

    return prisma.assistant.delete({ where: { id } });
  }
}

export default new AssistantService();

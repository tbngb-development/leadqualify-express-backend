import prisma from "../../../../shared/config/database/prisma";
import type {
  AssistantRepository,
  RegisterAssistantData,
} from "../../application/interfaces/assistant-repository.interface";
import type { AssistantEntityData } from "../../domain/entities/assistant.entity";

export class PrismaAssistantRepository implements AssistantRepository {
  async list(tenantId: string): Promise<AssistantEntityData[]> {
    const assistants = await prisma.assistant.findMany({
      where: { tenantId },
      orderBy: { createdAt: "desc" },
    });

    return assistants.map((a) => this.toEntityData(a));
  }

  async findById(
    tenantId: string,
    id: string,
  ): Promise<AssistantEntityData | null> {
    const assistant = await prisma.assistant.findFirst({
      where: { id, tenantId },
    });

    if (!assistant) return null;
    return this.toEntityData(assistant);
  }

  async findByBolnaId(
    tenantId: string,
    bolnaId: string,
  ): Promise<AssistantEntityData | null> {
    const assistant = await prisma.assistant.findFirst({
      where: { bolnaId, tenantId },
    });

    if (!assistant) return null;
    return this.toEntityData(assistant);
  }

  async create(
    tenantId: string,
    data: RegisterAssistantData,
  ): Promise<AssistantEntityData> {
    const assistant = await prisma.assistant.create({
      data: {
        bolnaId: data.bolnaId,
        name: data.name,
        tenantId,
        config: data.config as any,
      },
    });

    return this.toEntityData(assistant);
  }

  async update(
    tenantId: string,
    id: string,
    name: string,
  ): Promise<AssistantEntityData> {
    const assistant = await prisma.assistant.update({
      where: { id },
      data: { name },
    });

    return this.toEntityData(assistant);
  }

  async updateConfig(
    tenantId: string,
    id: string,
    config: any,
  ): Promise<AssistantEntityData> {
    const assistant = await prisma.assistant.update({
      where: { id },
      data: { config },
    });

    return this.toEntityData(assistant);
  }

  async delete(tenantId: string, id: string): Promise<void> {
    await prisma.assistant.delete({
      where: { id },
    });
  }

  async getCampaignReferenceCount(id: string): Promise<number> {
    return prisma.campaign.count({
      where: { assistantId: id },
    });
  }

  private toEntityData(a: {
    id: string;
    bolnaId: string;
    name: string;
    tenantId: string;
    config: unknown;
    createdAt: Date;
    updatedAt: Date;
  }): AssistantEntityData {
    return {
      id: a.id,
      bolnaId: a.bolnaId,
      name: a.name,
      tenantId: a.tenantId,
      config: a.config as Record<string, unknown>,
      createdAt: a.createdAt,
      updatedAt: a.updatedAt,
    };
  }
}

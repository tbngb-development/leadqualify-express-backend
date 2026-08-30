import { AssistantEntityData } from "../../domain/entities/assistant.entity";

export interface RegisterAssistantData {
  bolnaId: string;
  name: string;
  config: Record<string, unknown>;
}

export interface AssistantRepository {
  list(tenantId: string): Promise<AssistantEntityData[]>;
  findById(tenantId: string, id: string): Promise<AssistantEntityData | null>;
  findByBolnaId(
    tenantId: string,
    bolnaId: string,
  ): Promise<AssistantEntityData | null>;
  create(
    tenantId: string,
    data: RegisterAssistantData,
  ): Promise<AssistantEntityData>;
  update(
    tenantId: string,
    id: string,
    name: string,
  ): Promise<AssistantEntityData>;
  updateConfig(
    tenantId: string,
    id: string,
    config: Record<string, unknown>,
  ): Promise<AssistantEntityData>;
  delete(tenantId: string, id: string): Promise<void>;
  getCampaignReferenceCount(id: string): Promise<number>;
}

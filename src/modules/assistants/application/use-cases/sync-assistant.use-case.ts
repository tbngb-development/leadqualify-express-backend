import { type AssistantRepository } from "../interfaces/assistant-repository.interface";
import { type BolnaAgentProvider } from "../interfaces/bolna-agent-provider.interface";
import { AssistantNotFoundError } from "../../domain/errors/assistant.errors";
import { type AssistantEntityData } from "../../domain/entities/assistant.entity";

export class SyncAssistantUseCase {
  constructor(
    private readonly assistantRepo: AssistantRepository,
    private readonly bolnaProvider: BolnaAgentProvider
  ) {}

  async execute(tenantId: string, id: string): Promise<AssistantEntityData> {
    const assistant = await this.assistantRepo.findById(tenantId, id);
    if (!assistant) {
      throw new AssistantNotFoundError();
    }

    const bolnaAgent = await this.bolnaProvider.verifyAgent(assistant.bolnaId);

    return this.assistantRepo.updateConfig(
      tenantId,
      id,
      bolnaAgent as unknown as Record<string, unknown>
    );
  }
}
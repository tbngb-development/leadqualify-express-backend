import { type AssistantRepository } from "../interfaces/assistant-repository.interface";
import { type BolnaAgentProvider } from "../interfaces/bolna-agent-provider.interface";
import { type RegisterAssistantInput } from "../dto/assistant.dto";
import { DuplicateAssistantError } from "../../domain/errors/assistant.errors";
import { type AssistantEntityData } from "../../domain/entities/assistant.entity";

export class RegisterAssistantUseCase {
  constructor(
    private readonly assistantRepo: AssistantRepository,
    private readonly bolnaProvider: BolnaAgentProvider
  ) {}

  async execute(input: RegisterAssistantInput): Promise<AssistantEntityData> {
    // 1. Verify agent remote context exists
    const bolnaAgent = await this.bolnaProvider.verifyAgent(input.bolnaId);

    // 2. Reject registrations of identical Bolna agents inside same Tenant
    const existing = await this.assistantRepo.findByBolnaId(input.tenantId, input.bolnaId);
    if (existing) {
      throw new DuplicateAssistantError(input.bolnaId, existing.name);
    }

    return this.assistantRepo.create(input.tenantId, {
      bolnaId: input.bolnaId,
      name: input.name,
      config: bolnaAgent as unknown as Record<string, unknown>,
    });
  }
}
import { AssistantRepository } from "../interfaces/assistant-repository.interface";
import { UpdateAssistantInput } from "../dto/assistant.dto";
import { AssistantNotFoundError } from "../../domain/errors/assistant.errors";
import { AssistantEntityData } from "../../domain/entities/assistant.entity";

export class UpdateAssistantUseCase {
  constructor(private readonly assistantRepo: AssistantRepository) {}

  async execute(input: UpdateAssistantInput): Promise<AssistantEntityData> {
    const assistant = await this.assistantRepo.findById(input.tenantId, input.id);
    if (!assistant) {
      throw new AssistantNotFoundError();
    }

    return this.assistantRepo.update(input.tenantId, input.id, input.name);
  }
}
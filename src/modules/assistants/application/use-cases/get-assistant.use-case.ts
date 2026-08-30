import { AssistantRepository } from "../interfaces/assistant-repository.interface";
import { BolnaAgentProvider } from "../interfaces/bolna-agent-provider.interface";
import { AssistantNotFoundError } from "../../domain/errors/assistant.errors";
import { GetAssistantOutput } from "../dto/assistant.dto";
import {
  getAgentSystemPrompt,
  extractPromptInputFields,
  getAgentFirstMessage,
} from "../../infrastructure/promptVariableExtractor";

export class GetAssistantUseCase {
  constructor(
    private readonly assistantRepo: AssistantRepository,
    private readonly bolnaProvider: BolnaAgentProvider,
  ) {}

  async execute(tenantId: string, id: string): Promise<GetAssistantOutput> {
    const assistant = await this.assistantRepo.findById(tenantId, id);
    if (!assistant) {
      throw new AssistantNotFoundError();
    }

    // Dynamic extraction of metadata directly from remote config mapping
    const bolnaAgent = await this.bolnaProvider.verifyAgent(assistant.bolnaId);

    const systemPrompt = getAgentSystemPrompt(bolnaAgent);
    const firstMessage = getAgentFirstMessage(bolnaAgent);

    const variables = extractPromptInputFields(systemPrompt, firstMessage);

    return {
      assistant,
      variables,
    };
  }
}

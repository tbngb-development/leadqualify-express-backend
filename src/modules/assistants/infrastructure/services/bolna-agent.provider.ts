import { bolnaClient } from "../../../../shared/config/external/bolna/bolna.client";
import { type BolnaAgentProvider } from "../../application/interfaces/bolna-agent-provider.interface";
import { type BolnaAgentResponse } from "../../../../shared/types/bolna.types";
import { BolnaAgentNotFoundError, BolnaVerificationFailedError } from "../../domain/errors/assistant.errors";

export class BolnaAgentProviderImpl implements BolnaAgentProvider {
  async verifyAgent(bolnaId: string): Promise<BolnaAgentResponse> {
    try {
      return await bolnaClient.agents.verify(bolnaId);
    } catch (error: any) {
      if (error.response?.status === 404) {
        throw new BolnaAgentNotFoundError(bolnaId);
      }
      throw new BolnaVerificationFailedError(error.message || String(error));
    }
  }

  async listAgents(): Promise<BolnaAgentResponse[]> {
    return bolnaClient.agents.list();
  }
}
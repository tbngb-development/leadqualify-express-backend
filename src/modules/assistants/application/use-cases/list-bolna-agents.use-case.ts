import { BolnaAgentProvider } from "../interfaces/bolna-agent-provider.interface";
import { BolnaAgentResponse } from "../../../../shared/types/bolna.types";

export class ListBolnaAgentsUseCase {
  constructor(private readonly bolnaProvider: BolnaAgentProvider) {}

  async execute(): Promise<BolnaAgentResponse[]> {
    return this.bolnaProvider.listAgents();
  }
}
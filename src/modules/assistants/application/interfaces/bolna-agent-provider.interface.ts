import { type BolnaAgentResponse } from "../../../../shared/types/bolna.types";

export interface BolnaAgentProvider {
  verifyAgent(bolnaId: string): Promise<BolnaAgentResponse>;
  listAgents(): Promise<BolnaAgentResponse[]>;
}

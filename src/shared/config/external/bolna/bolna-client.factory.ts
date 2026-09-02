import { BolnaClient, type IBolnaClient } from "./bolna.client";
import type { BolnaApiKeyRepository } from "../../../../modules/bolna-api-keys/application/interfaces/bolna-api-key-repository.interface";
import { TenantHasNoApiKeyError } from "../../../../modules/bolna-api-keys/domain/errors/bolna-api-key.errors";
import { decryptKey } from "../../../utils/encryption";
import { env } from "../../env";

export interface IBolnaClientFactory {
  forTenant(tenantId: string): Promise<IBolnaClient>;
}

export class BolnaClientFactory implements IBolnaClientFactory {
  constructor(private readonly apiKeyRepository: BolnaApiKeyRepository) {}

  async forTenant(tenantId: string): Promise<IBolnaClient> {
    const tenantKey = await this.apiKeyRepository.findKeyForTenant(tenantId);
    if (!tenantKey) throw new TenantHasNoApiKeyError(tenantId);
    if (!tenantKey.isActive) throw new TenantHasNoApiKeyError(tenantId);

    // Fire-and-forget: update last accessed timestamp
    this.apiKeyRepository
      .updateLastAccessed(tenantKey.id)
      .catch((err) =>
        console.error("[BolnaClientFactory] lastAccessed update failed:", err),
      );

    const decryptedApiKey = decryptKey(tenantKey.encryptedKey);
    return new BolnaClient(decryptedApiKey, env.bolna.apiUrl);
  }
}

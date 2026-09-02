import type { BolnaApiKey } from "../../../../generated/prisma";
import prisma from "../../../../shared/config/database/prisma";
import type {
  BolnaApiKeyRepository,
  CreateBolnaApiKeyData,
  BolnaApiKeyWithCount
} from "../../application/interfaces/bolna-api-key-repository.interface";
import { NoAvailableApiKeyError } from "../../domain/errors/bolna-api-key.errors";

export class PrismaBolnaApiKeyRepository implements BolnaApiKeyRepository {
  // ── Runtime resolution ─────────────────────────────────────────

  async findKeyForTenant(tenantId: string): Promise<BolnaApiKey | null> {
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      select: { bolnaApiKey: true },
    });
    return tenant?.bolnaApiKey ?? null;
  }

  async updateLastAccessed(keyId: string): Promise<void> {
    await prisma.bolnaApiKey.update({
      where: { id: keyId },
      data: { lastAccessedAt: new Date() },
    });
  }

  // ── Assignment ────────────────────────────────────────────────

  async assignLeastLoadedKeyToTenant(tenantId: string): Promise<BolnaApiKey> {
    // Native DB-level least-loaded selection using relational count sort
    const leastLoadedKey = await prisma.bolnaApiKey.findFirst({
      where: { type: "GENERAL", isActive: true },
      orderBy: { tenants: { _count: "asc" } },
    });

    if (!leastLoadedKey) throw new NoAvailableApiKeyError();

    await prisma.tenant.update({
      where: { id: tenantId },
      data: { bolnaApiKeyId: leastLoadedKey.id },
    });

    return leastLoadedKey;
  }

  async assignKeyToTenant(tenantId: string, keyId: string): Promise<void> {
    await prisma.tenant.update({
      where: { id: tenantId },
      data: { bolnaApiKeyId: keyId },
    });
  }

  // ── Admin CRUD ────────────────────────────────────────────────

  async create(data: CreateBolnaApiKeyData): Promise<BolnaApiKey> {
    return prisma.bolnaApiKey.create({
      data: {
        keyIdentifier: data.keyIdentifier,
        encryptedKey: data.encryptedKey,
        type: data.type,
        isPlatformDefault: data.isPlatformDefault,
        createdBy: data.createdBy,
      },
    });
  }

  async list(): Promise<BolnaApiKeyWithCount[]> {
    return prisma.bolnaApiKey.findMany({
      include: { _count: { select: { tenants: true } } },
      orderBy: [{ isActive: "desc" }, { createdAt: "desc" }],
    });
  }

  async findById(id: string): Promise<BolnaApiKey | null> {
    return prisma.bolnaApiKey.findUnique({ where: { id } });
  }

  async deactivate(id: string): Promise<BolnaApiKey> {
    return prisma.bolnaApiKey.update({
      where: { id },
      data: { isActive: false },
    });
  }

  // ── Lifecycle ─────────────────────────────────────────────────

  async reassignTenantsFromKey(keyId: string): Promise<number> {
    // Get all tenants currently using this key
    const affectedTenants = await prisma.tenant.findMany({
      where: { bolnaApiKeyId: keyId },
      select: { id: true },
    });

    if (affectedTenants.length === 0) return 0;

    // Reassign each to the next least-loaded GENERAL key
    let reassignedCount = 0;
    for (const tenant of affectedTenants) {
      try {
        await this.assignLeastLoadedKeyToTenant(tenant.id);
        reassignedCount++;
      } catch {
        // Silently skip if no pool key available; caller can inspect
      }
    }

    return reassignedCount;
  }

  async findTenantIdsUsingKey(keyId: string): Promise<string[]> {
    const tenants = await prisma.tenant.findMany({
      where: { bolnaApiKeyId: keyId },
      select: { id: true },
    });
    return tenants.map((t) => t.id);
  }
}

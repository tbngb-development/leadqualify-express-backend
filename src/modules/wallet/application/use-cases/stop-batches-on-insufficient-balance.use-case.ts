import prisma from "../../../../shared/config/database/prisma";
import type { WalletRepository } from "../interfaces/wallet-repository.interface";
import type { IBolnaClientFactory } from "../../../../shared/config/external/bolna/bolna-client.factory";

export class StopBatchesOnInsufficientBalanceUseCase {
  constructor(
    private readonly walletRepo: WalletRepository,
    private readonly bolnaFactory: IBolnaClientFactory,
  ) {}

  async execute(input: { tenantId: string }): Promise<void> {
    const wallet = await this.walletRepo.findByTenantId(input.tenantId);
    if (!wallet) return;

    const threshold = wallet.lowBalanceThreshold ?? 10000;
    if (wallet.balance >= threshold) return;

    const running = await prisma.leadBatch.findMany({
      where: {
        tenantId: input.tenantId,
        status: { in: ["RUNNING", "SCHEDULED"] },
        bolnaBatchId: { not: null },
      },
    });

    if (running.length === 0) return;

    let bolna;
    try {
      bolna = await this.bolnaFactory.forTenant(input.tenantId);
    } catch (err) {
      console.error(
        "[Wallet] cannot resolve Bolna client to stop batches:",
        err,
      );
      return;
    }

    for (const batch of running) {
      if (!batch.bolnaBatchId) continue;
      try {
        await bolna.batches.stop(batch.bolnaBatchId);
        await prisma.leadBatch.update({
          where: { id: batch.id },
          data: { status: "STOPPED" },
        });
      } catch (err) {
        console.error(`[Wallet] Failed to stop batch ${batch.id}:`, err);
      }
    }
  }
}

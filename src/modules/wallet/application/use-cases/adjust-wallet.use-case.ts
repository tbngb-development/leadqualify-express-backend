import type { WalletRepository } from "../interfaces/wallet-repository.interface";
import type { AdjustWalletInput } from "../dto/admin-wallet.dto";
import { toWalletTransactionResponse } from "../mappers/wallet.mapper";

export class AdjustWalletUseCase {
  constructor(private readonly walletRepo: WalletRepository) {}

  async execute(input: AdjustWalletInput, adminUserId: string) {
    const { tenantId, amountPaisa, type, description, bonusExpiresAt } = input;

    // Ensure wallet exists before adjusting
    await this.walletRepo.ensureWallet(tenantId);

    let tx;
    if (type === "DEBIT") {
      tx = await this.walletRepo.debit({
        tenantId,
        amount: amountPaisa,
        description,
        referenceType: "ADJUSTMENT",
        referenceId: `adj_${Date.now()}`,
        createdBy: adminUserId,
      });
    } else {
      tx = await this.walletRepo.credit({
        tenantId,
        amount: amountPaisa,
        type: type as "CREDIT" | "BONUS",
        description,
        referenceType: "ADJUSTMENT",
        referenceId: `adj_${Date.now()}`,
        createdBy: adminUserId,
        bonusExpiresAt: bonusExpiresAt ? new Date(bonusExpiresAt) : undefined,
      });
    }

    return toWalletTransactionResponse(tx);
  }
}

import type { WalletRepository } from "../interfaces/wallet-repository.interface";
import type { WalletResponse } from "../dto/wallet.dto";
import { WalletNotFoundError } from "../../domain/errors/wallet.errors";
import { toWalletResponse } from "../mappers/wallet.mapper";

export class SetThresholdUseCase {
  constructor(private readonly walletRepo: WalletRepository) {}

  async execute(tenantId: string, threshold: number): Promise<WalletResponse> {
    await this.walletRepo.ensureWallet(tenantId);
    const wallet = await this.walletRepo.setLowBalanceThreshold(
      tenantId,
      threshold,
    );
    if (!wallet) throw new WalletNotFoundError(tenantId);
    return toWalletResponse(wallet);
  }
}

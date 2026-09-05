import type { WalletResponse } from "../dto/wallet.dto";
import type { WalletRepository } from "../interfaces/wallet-repository.interface";
import { toWalletResponse } from "../mappers/wallet.mapper";

export class GetWalletUseCase {
  constructor(private readonly walletRepo: WalletRepository) {}

  async execute(tenantId: string): Promise<WalletResponse> {
    const wallet = await this.walletRepo.ensureWallet(tenantId);
    return toWalletResponse(wallet);
  }
}

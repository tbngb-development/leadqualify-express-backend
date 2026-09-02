import type { ListTransactionsResult } from "../dto/wallet.dto";
import type { WalletRepository } from "../interfaces/wallet-repository.interface";
import { toWalletTransactionResponse } from "../mappers/wallet.mapper";

export class ListTransactionsUseCase {
  constructor(private readonly walletRepo: WalletRepository) {}

  async execute(input: {
    tenantId: string;
    page?: number;
    limit?: number;
  }): Promise<ListTransactionsResult> {
    const page = input.page && input.page > 0 ? input.page : 1;
    const limit =
      input.limit && input.limit > 0 ? Math.min(input.limit, 100) : 20;

    const { items, total } = await this.walletRepo.listTransactions(
      input.tenantId,
      { page, limit },
    );

    return {
      items: items.map(toWalletTransactionResponse),
      total,
      page,
      limit,
    };
  }
}

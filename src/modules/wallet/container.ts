import { PrismaWalletRepository } from "./infrastructure/repositories/prisma-wallet.repository";
import type { WalletRepository } from "./application/interfaces/wallet-repository.interface";
import type { PlanRepository } from "../plans/application/interfaces/plan-repository.interface";
import type { IBolnaClientFactory } from "../../shared/config/external/bolna/bolna-client.factory";
import type { IEmailService } from "../../shared/config/external/email/email.interface";
import { TenantWalletController } from "./presentation/tenant-wallet.controller";
import { DebitWalletForCallUseCase } from "./application/use-cases/debit-wallet.use-case";
import { CheckBalanceForBatchUseCase } from "./application/use-cases/check-balance-for-batch.use-case";
import { CheckLowBalanceUseCase } from "./application/use-cases/check-low-balance.use-case";
import { StopBatchesOnInsufficientBalanceUseCase } from "./application/use-cases/stop-batches-on-insufficient-balance.use-case";
import { GetWalletUseCase } from "./application/use-cases/get-wallet.use-case";
import { ListTransactionsUseCase } from "./application/use-cases/list-transactions.use-case";
import { SetThresholdUseCase } from "./application/use-cases/set-threshold.use-case";

export interface WalletModuleDeps {
  planRepository: PlanRepository;
  bolnaClientFactory: IBolnaClientFactory;
  email: IEmailService;
}

export interface WalletModule {
  repository: WalletRepository;
  tenantController: TenantWalletController;
  useCases: {
    debitWalletForCall: DebitWalletForCallUseCase;
    checkBalanceForBatch: CheckBalanceForBatchUseCase;
    checkLowBalance: CheckLowBalanceUseCase;
    stopBatchesOnInsufficientBalance: StopBatchesOnInsufficientBalanceUseCase;
  };
}

export function buildWalletModule(deps: WalletModuleDeps): WalletModule {
  const repository = new PrismaWalletRepository();

  const getWallet = new GetWalletUseCase(repository);
  const listTransactions = new ListTransactionsUseCase(repository);
  const setThreshold = new SetThresholdUseCase(repository);

  const checkLowBalance = new CheckLowBalanceUseCase(repository, deps.email);
  const stopBatches = new StopBatchesOnInsufficientBalanceUseCase(
    repository,
    deps.bolnaClientFactory,
  );
  const checkBalanceForBatch = new CheckBalanceForBatchUseCase(
    repository,
    deps.planRepository,
  );
  const debitWalletForCall = new DebitWalletForCallUseCase(
    repository,
    deps.planRepository,
    checkLowBalance,
    stopBatches,
  );

  return {
    repository,
    tenantController: new TenantWalletController(
      getWallet,
      listTransactions,
      setThreshold,
    ),
    useCases: {
      debitWalletForCall,
      checkBalanceForBatch,
      checkLowBalance,
      stopBatchesOnInsufficientBalance: stopBatches,
    },
  };
}

import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../../../shared/utils/response";
import type { AuthRequest } from "../../../shared/types";
import type { GetWalletUseCase } from "../application/use-cases/get-wallet.use-case";
import type { ListTransactionsUseCase } from "../application/use-cases/list-transactions.use-case";
import type { AdjustWalletUseCase } from "../application/use-cases/adjust-wallet.use-case";

export class AdminWalletController {
  constructor(
    private readonly getWallet: GetWalletUseCase,
    private readonly listTransactions: ListTransactionsUseCase,
    private readonly adjustWallet: AdjustWalletUseCase,
  ) {}

  get = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = req.query.tenantId as string;
      if (!tenantId) throw new Error("tenantId is required");
      const wallet = await this.getWallet.execute(tenantId);
      sendSuccess(res, wallet);
    } catch (err) {
      next(err);
    }
  };

  transactions = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tenantId = req.query.tenantId as string;
      if (!tenantId) throw new Error("tenantId is required");
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 50;
      const result = await this.listTransactions.execute({
        tenantId,
        page,
        limit,
      });
      sendSuccess(res, result);
    } catch (err) {
      next(err);
    }
  };

  adjust = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const adminId = (req as AuthRequest).user.userId;
      const result = await this.adjustWallet.execute(req.body, adminId);
      sendSuccess(res, result);
    } catch (err) {
      next(err);
    }
  };
}

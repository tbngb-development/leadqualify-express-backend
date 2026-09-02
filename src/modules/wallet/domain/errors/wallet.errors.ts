import { AppError } from "../../../../shared/errors/app.error";
import { NotFoundError } from "../../../../shared/errors/not-found.error";
import { HttpStatus } from "../../../../shared/constants/http-status";
import { WalletMessages } from "../../../../shared/constants/messages";

export class WalletNotFoundError extends NotFoundError {
  constructor(tenantId?: string) {
    super(tenantId ? `Wallet for tenant ${tenantId}` : "Wallet");
  }
}

export class InsufficientBalanceError extends AppError {
  constructor() {
    super(
      HttpStatus.BAD_REQUEST,
      WalletMessages.INSUFFICIENT_BALANCE,
      "INSUFFICIENT_BALANCE",
    );
  }
}
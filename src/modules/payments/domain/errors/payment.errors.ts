import { AppError } from "../../../../shared/errors/app.error";
import { NotFoundError } from "../../../../shared/errors/not-found.error";
import { HttpStatus } from "../../../../shared/constants/http-status";
import { PaymentMessages } from "../../../../shared/constants/messages";

export class RechargeNotFoundError extends NotFoundError {
  constructor() {
    super("Recharge");
  }
}

export class InvalidSignatureError extends AppError {
  constructor() {
    super(
      HttpStatus.BAD_REQUEST,
      PaymentMessages.INVALID_SIGNATURE,
      "INVALID_SIGNATURE",
    );
  }
}

export class InvalidRechargeSlabError extends AppError {
  constructor() {
    super(HttpStatus.BAD_REQUEST, PaymentMessages.INVALID_SLAB, "INVALID_SLAB");
  }
}

export class PaymentProviderError extends AppError {
  constructor(message = "Payment provider error") {
    super(HttpStatus.BAD_GATEWAY, message, "PAYMENT_PROVIDER_ERROR");
  }
}

export class PlanAlreadyActiveError extends AppError {
  constructor() {
    super(
      HttpStatus.BAD_REQUEST,
      "Plan is already active",
      "PLAN_ALREADY_ACTIVE",
    );
  }
}

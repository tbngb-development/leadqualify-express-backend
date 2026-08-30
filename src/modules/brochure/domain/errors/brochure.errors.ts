import { NotFoundError } from "../../../../shared/errors/not-found.error";
import { AppError } from "../../../../shared/errors/app.error";
import { HttpStatus } from "../../../../shared/constants/http-status";

export class BrochureNotFoundError extends NotFoundError {
  constructor() {
    super("Brochure");
  }
}

export class UnprocessablePdfError extends AppError {
  constructor(message: string) {
    super(
      HttpStatus.UNPROCESSABLE_ENTITY,
      `Unprocessable PDF content: ${message}`,
      "UNPROCESSABLE_PDF",
    );
  }
}

export class AIQuotaExceededError extends AppError {
  constructor() {
    super(
      HttpStatus.SERVICE_UNAVAILABLE,
      "AI Extraction Quota exceeded. Please try again later.",
      "AI_QUOTA_EXCEEDED",
    );
  }
}

export class BrochureInUseError extends AppError {
  constructor(campaignCount: number) {
    super(
      HttpStatus.CONFLICT,
      `Cannot delete brochure — it is currently referenced by ${campaignCount} active campaign(s).`,
      "BROCHURE_IN_USE",
    );
  }
}

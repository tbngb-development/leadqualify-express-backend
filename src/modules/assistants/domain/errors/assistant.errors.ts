import { NotFoundError } from "../../../../shared/errors/not-found.error";
import { ConflictError } from "../../../../shared/errors/conflict.error";
import { AppError } from "../../../../shared/errors/app.error";
import { HttpStatus } from "../../../../shared/constants/http-status";

export class AssistantNotFoundError extends NotFoundError {
  constructor() {
    super("Assistant");
  }
}

export class BolnaAgentNotFoundError extends AppError {
  constructor(bolnaId: string) {
    super(
      HttpStatus.BAD_REQUEST,
      `Bolna agent not found: ${bolnaId}. Please verify this ID exists in your Bolna dashboard.`,
      "BOLNA_AGENT_NOT_FOUND",
    );
  }
}

export class BolnaVerificationFailedError extends AppError {
  constructor(detail: string) {
    super(
      HttpStatus.BAD_GATEWAY,
      `Failed to verify Bolna agent: ${detail}`,
      "BOLNA_VERIFICATION_FAILED",
    );
  }
}

export class DuplicateAssistantError extends ConflictError {
  constructor(bolnaId: string, name: string) {
    super(
      `This Bolna agent (${bolnaId}) is already registered under friendly name "${name}"`,
    );
  }
}

export class AssistantInUseError extends AppError {
  constructor(campaignCount: number) {
    super(
      HttpStatus.CONFLICT,
      `Cannot delete assistant — it is currently referenced by ${campaignCount} campaign(s).`,
      "ASSISTANT_IN_USE",
    );
  }
}

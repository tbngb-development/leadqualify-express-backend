import { NotFoundError } from "../../../../shared/errors/not-found.error";

export class LeadNotFoundError extends NotFoundError {
  constructor() {
    super("Lead");
  }
}

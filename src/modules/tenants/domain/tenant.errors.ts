import { NotFoundError } from "../../../shared/errors";

export class TenantNotFoundError extends NotFoundError {
  constructor() {
    super("Tenant");
  }
}
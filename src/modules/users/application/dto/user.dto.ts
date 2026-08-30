import { TenantRole } from "../../../../generated/prisma";

export interface CreateUserInput {
  email: string;
  name: string;
  password?: string;
  role?: TenantRole;
}

export interface UpdateUserInput {
  name?: string;
  role?: TenantRole;
}

import type { TenantRole } from "../../../../generated/prisma";

export interface AuthUserEntity {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  isPlatformAdmin: boolean;
  memberships: AuthMembershipEntity[];
}

export interface AuthMembershipEntity {
  id: string;
  tenantId: string;
  tenantName: string;
  tenantActive: boolean;
  role: TenantRole;
}
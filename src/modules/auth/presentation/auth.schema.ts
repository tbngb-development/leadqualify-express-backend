import { z } from "zod";

const emailSchema = z.email("Invalid email format").toLowerCase().trim();

const passwordSchema = z
  .string()
  .min(1, "Password is required")
  .max(128, "Password too long");

const nameSchema = z
  .string()
  .min(1, "Name is required")
  .max(100, "Name too long")
  .trim();

export const registerTenantOwnerSchema = z.object({
  tenantName: z
    .string()
    .min(1, "Tenant name is required")
    .max(100, "Tenant name too long")
    .trim(),
  email: emailSchema,
  password: passwordSchema,
  name: nameSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  tenantId: z.string().uuid("Invalid tenant ID").optional(),
});

export const selectTenantSchema = z.object({
  tenantId: z.string().uuid("Invalid tenant ID"),
});

export const refreshTokensSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required").optional(),
});

export const logoutSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required").optional(),
});

export const createInviteSchema = z.object({
  email: emailSchema,
  role: z.enum(["ADMIN", "USER"], {
    message: "Role must be ADMIN or USER",
  }),
});

export const acceptInviteSchema = z.object({
  inviteToken: z.string().min(1, "Invite token is required"),
  email: emailSchema,
  password: passwordSchema,
  name: nameSchema,
});

export const adminLoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type RegisterTenantOwnerBody = z.infer<typeof registerTenantOwnerSchema>;
export type LoginBody = z.infer<typeof loginSchema>;
export type SelectTenantBody = z.infer<typeof selectTenantSchema>;
export type RefreshTokensBody = z.infer<typeof refreshTokensSchema>;
export type LogoutBody = z.infer<typeof logoutSchema>;
export type CreateInviteBody = z.infer<typeof createInviteSchema>;
export type AcceptInviteBody = z.infer<typeof acceptInviteSchema>;
export type AdminLoginBody = z.infer<typeof adminLoginSchema>;

import z from "zod";

export const createOwnerInviteSchema = z.object({
  email: z.string().email(),
  tenantName: z.string().min(1).max(100),
  planId: z.string().uuid(),
  expiryDays: z.number().int().min(3).max(7).optional(),
});

export const acceptOwnerInviteSchema = z.object({
  token: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(8),
});

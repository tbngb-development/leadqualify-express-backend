import { z } from "zod";

export const adjustWalletSchema = z.object({
  tenantId: z.string().uuid(),
  amountPaisa: z.number().int().min(1),
  type: z.enum(["CREDIT", "DEBIT", "BONUS"]),
  description: z.string().min(1),
  bonusExpiresAt: z.string().datetime().optional(), // ISO string
});

export type AdjustWalletInput = z.infer<typeof adjustWalletSchema>;

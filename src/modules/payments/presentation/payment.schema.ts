import { z } from "zod";

export const createOrderSchema = z.object({
  purpose: z.enum(["ONBOARDING", "WALLET_TOPUP"]),
  amountPaisa: z.number().int().min(100).optional(),
});

export const verifyPaymentSchema = z.object({
  razorpayOrderId: z.string().min(1),
  razorpayPaymentId: z.string().min(1),
  razorpaySignature: z.string().min(1),
});

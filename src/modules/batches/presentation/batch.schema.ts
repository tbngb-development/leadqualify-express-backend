import { z } from "zod";

export const scheduleBatchSchema = z.object({
  scheduledAt: z
    .string()
    .min(1, "scheduledAt is required (ISO 8601 with timezone)"),
});

export const retryConfigSchema = z.object({
  enabled: z.boolean(),
  max_retries: z.number().int().min(0).max(5),
  retry_on_statuses: z
    .array(z.enum(["no-answer", "busy", "failed"]))
    .optional(),
  retry_on_voicemail: z.boolean().optional(),
  retry_intervals_minutes: z.array(z.number().int().positive()).optional(),
});

export type RetryConfigBody = z.infer<typeof retryConfigSchema>;
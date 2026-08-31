import { z } from "zod";

export const listCallsQuerySchema = z.object({
  campaignId: z.string().uuid("Invalid campaign ID").optional(),
  leadId: z.string().uuid("Invalid lead ID").optional(),
  status: z.string().optional(),
  disposition: z.string().optional(),
  leadTemperature: z.string().optional(),
  locationMatch: z.string().optional(),
  search: z.string().optional(),
  dateFrom: z
    .string()
    .datetime({ message: "Invalid dateFrom format" })
    .optional(),
  dateTo: z.string().datetime({ message: "Invalid dateTo format" }).optional(),
  sortBy: z.enum(["startedAt", "duration", "cost", "createdAt"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
  page: z
    .preprocess((val) => Number(val), z.number().int().positive())
    .optional(),
  limit: z
    .preprocess((val) => Number(val), z.number().int().positive())
    .optional(),
});

export const getCallStatsQuerySchema = z.object({
  campaignId: z.string().uuid("Invalid campaign ID").optional(),
  leadId: z.string().uuid("Invalid lead ID").optional(),
});

export const adminListCallsQuerySchema = listCallsQuerySchema.extend({
  tenantId: z.string().uuid("Invalid tenant ID"),
});

export const adminGetCallStatsQuerySchema = getCallStatsQuerySchema.extend({
  tenantId: z.string().uuid("Invalid tenant ID"),
});

export type AdminListCallsQuery = z.infer<typeof adminListCallsQuerySchema>;
export type AdminGetCallStatsQuery = z.infer<
  typeof adminGetCallStatsQuerySchema
>;

export type ListCallsQuery = z.infer<typeof listCallsQuerySchema>;
export type GetCallStatsQuery = z.infer<typeof getCallStatsQuerySchema>;

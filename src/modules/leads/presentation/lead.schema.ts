import { z } from "zod";

export const listLeadsQuerySchema = z.object({
  campaignId: z.string().uuid("Invalid campaign ID").optional(),
  status: z.string().optional(),
  search: z.string().optional(),
  dateFrom: z
    .string()
    .datetime({ message: "Invalid dateFrom ISO format" })
    .optional(),
  dateTo: z
    .string()
    .datetime({ message: "Invalid dateTo ISO format" })
    .optional(),
  sortBy: z.enum(["createdAt", "name", "updatedAt"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
  page: z
    .preprocess((val) => Number(val), z.number().int().positive())
    .optional(),
  limit: z
    .preprocess((val) => Number(val), z.number().int().positive())
    .optional(),
});

export const getLeadsStatsQuerySchema = z.object({
  campaignId: z.uuid("Invalid campaign ID").optional(),
});

export type ListLeadsQuery = z.infer<typeof listLeadsQuerySchema>;
export type GetLeadsStatsQuery = z.infer<typeof getLeadsStatsQuerySchema>;

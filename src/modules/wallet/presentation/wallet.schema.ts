import { z } from "zod";

export const setThresholdSchema = z.object({
  threshold: z.number().int().min(0),
});

import { z } from "zod";

export const apiErrorPayloadSchema = z.object({
  error: z.string(),
  details: z.record(z.string()),
});

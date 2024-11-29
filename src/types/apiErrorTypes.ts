import { apiErrorPayloadSchema } from "@/schemas";
import { z } from "zod";

export type ApiErrorPayload = z.infer<typeof apiErrorPayloadSchema>;

import { userSchema, newUserSchema, publicUserSchema } from "@/schemas";
import { z } from "zod";

export type NewUser = z.infer<typeof newUserSchema>;
export type User = z.infer<typeof userSchema>;
export type PublicUser = z.infer<typeof publicUserSchema>;

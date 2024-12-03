import { z } from "zod";
import {
  userSchema,
  newUserSchema,
  publicUserSchema,
  userLoginSchema,
} from "@/schemas";

export type NewUser = z.infer<typeof newUserSchema>;
export type User = z.infer<typeof userSchema>;
export type PublicUser = z.infer<typeof publicUserSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;

export interface AuthData {
  user: PublicUser;
  token: string;
}

export interface AuthContextValue {
  user: PublicUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (data: AuthData) => void;
  logout: () => void;
}

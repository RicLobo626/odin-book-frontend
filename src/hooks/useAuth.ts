import { AuthContext } from "@/contexts";
import { publicUserSchema } from "@/schemas";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within its Provider");
  }

  return context;
}

export const useAuthUser = () => {
  const { user } = useAuth();

  return publicUserSchema.parse(user);
};

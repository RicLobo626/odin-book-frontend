import { SignUpPage } from "@/components/pages/auth/SignUpPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(auth)/_auth/signup")({
  component: SignUpPage,
});

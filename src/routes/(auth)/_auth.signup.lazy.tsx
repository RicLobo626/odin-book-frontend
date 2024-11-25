import { SignUpPage } from "@/components/pages/SignUpPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(auth)/_auth/signup")({
  component: SignUpPage,
});

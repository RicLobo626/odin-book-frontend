import { HomePage } from "@/components/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_app/")({
  component: HomePage,
});

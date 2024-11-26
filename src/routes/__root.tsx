import { RootLayout } from "@/components/layouts/RootLayout";
import { NotFoundPage } from "@/components/pages";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

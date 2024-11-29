import { RootLayout } from "@/components/layouts/RootLayout";
import { NotFoundPage } from "@/components/pages";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

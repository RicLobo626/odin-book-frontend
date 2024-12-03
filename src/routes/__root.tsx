import { RootLayout } from "@/components/layouts/RootLayout";
import { NotFoundPage } from "@/components/pages";
import { AuthContextValue } from "@/types";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";

interface RouterContext {
  queryClient: QueryClient;
  auth: AuthContextValue;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

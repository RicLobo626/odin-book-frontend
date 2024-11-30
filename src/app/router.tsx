import { queryClient } from "@/app/queryClient";
import { routeTree } from "@/routeTree.gen";
import { createRouter } from "@tanstack/react-router";

export const router = createRouter({
  routeTree, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
  context: { queryClient },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

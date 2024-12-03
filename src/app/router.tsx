import { useAuth } from "@/hooks";
import { routeTree } from "@/routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { queryClient } from "@/app/queryClient";

export const router = createRouter({
  routeTree, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  context: {
    queryClient,
    auth: undefined!, // eslint-disable-line @typescript-eslint/no-non-null-assertion
  },
});

export const AppRouter = () => {
  const auth = useAuth();

  return <RouterProvider router={router} context={{ auth }} />;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

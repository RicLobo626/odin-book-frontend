import { AppLayout } from "@/components/layouts";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_app")({
  component: AppLayout,

  beforeLoad: ({ location, context }) => {
    const { isAuthenticated } = context.auth;

    if (!isAuthenticated) {
      // eslint-disable-next-line
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

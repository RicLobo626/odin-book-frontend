import { createFileRoute, redirect } from "@tanstack/react-router";
import { AppLayout } from "@/components/layouts";

const isAuthenticated = false;

export const Route = createFileRoute("/(app)/_app/")({
  component: AppLayout,

  beforeLoad: ({ location }) => {
    // eslint-disable-next-line
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

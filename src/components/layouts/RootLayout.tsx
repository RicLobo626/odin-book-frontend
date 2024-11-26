import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet } from "@tanstack/react-router";

export const RootLayout = () => (
  <>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

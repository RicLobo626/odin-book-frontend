import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/Toaster";
import { Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <>
      <Outlet />

      <TanStackRouterDevtools />

      <Toaster />
    </>
  );
};

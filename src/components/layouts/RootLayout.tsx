import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/Toaster";

export const RootLayout = () => {
  return (
    <>
      <Outlet />

      <TanStackRouterDevtools />

      <Toaster />
    </>
  );
};

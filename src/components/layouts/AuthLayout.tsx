import { useAuth } from "@/hooks";
import { Navigate, Outlet } from "@tanstack/react-router";
import { Earth } from "lucide-react";

export const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-full flex-col gap-5 py-5 md:flex-row md:px-5">
      <header className="my-auto text-center md:flex-1">
        <h1 className="text-4xl font-extrabold text-primary md:text-6xl">
          odin-book
        </h1>

        <p className="mt-2 text-xl">
          Connect with the world <Earth className="inline" aria-hidden="true" />
        </p>
      </header>

      <main className="my-auto flex flex-1 items-center justify-center md:justify-start">
        <Outlet />
      </main>
    </div>
  );
};

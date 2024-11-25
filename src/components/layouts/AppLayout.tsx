import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const AppLayout = () => {
  return (
    <>
      <header>
        <nav className="flex gap-2">
          <Link to=".">Home</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </>
  );
};

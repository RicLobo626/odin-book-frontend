import { Button } from "@/components/ui";
import { useAuth } from "@/hooks";
import { Link, Navigate, Outlet } from "@tanstack/react-router";

export const AppLayout = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => logout();

  return (
    <>
      <header>
        <nav className="flex gap-2">
          <Link to=".">Home</Link>
          <Button onClick={handleLogout}>Logout</Button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

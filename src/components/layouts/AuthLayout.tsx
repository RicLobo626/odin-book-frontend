import { Outlet } from "@tanstack/react-router";

export const AuthLayout = () => {
  return (
    <div className="flex h-full flex-col gap-5 py-5 md:flex-row md:px-5">
      <header className="my-auto text-center md:flex-1">
        <h1 className="text-primary text-4xl font-extrabold md:text-6xl">
          odin-book
        </h1>
        <p className="mt-2 text-xl">Connect with the world</p>
      </header>

      <main className="my-auto flex flex-1 items-center justify-center md:justify-start">
        <Outlet />
      </main>
    </div>
  );
};

import { Button } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Frown } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-6 p-3">
      <h1 className="text-center text-4xl font-bold text-primary md:text-5xl">
        Oops! Page not found
      </h1>

      <Frown />

      <p className="text-center">
        The page you are looking for cannot be found
      </p>

      <Button variant="outline" aria-label="Go to the homepage" asChild>
        <Link to="/"> Back to home</Link>
      </Button>
    </main>
  );
};

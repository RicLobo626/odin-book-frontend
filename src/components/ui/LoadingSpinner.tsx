import { cn } from "@/utils";
import { LoaderCircle, LucideProps } from "lucide-react";

interface LoadingSpinnerProps extends LucideProps {
  isLoading: boolean;
}

export const LoadingSpinner = ({
  isLoading,
  className,
  ...props
}: LoadingSpinnerProps) => {
  if (!isLoading) return null;

  return (
    <LoaderCircle
      className={cn("h-full animate-spin text-white", className)}
      aria-hidden="true"
      {...props}
    />
  );
};

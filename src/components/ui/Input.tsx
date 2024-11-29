import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, startIcon: StartIcon, endIcon: EndIcon, ...props },
    ref,
  ) => {
    return (
      <div className="relative w-full">
        {StartIcon && (
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 transform">
            <StartIcon size={18} className="text-muted-foreground ml-1" />
          </div>
        )}

        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-base ring-offset-white transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm",
            className,
            { "pl-9": StartIcon, "pr-9": EndIcon },
          )}
          ref={ref}
          {...props}
        />

        {EndIcon && (
          <div className="absolute right-3 top-1/2 mr-1 -translate-y-1/2 transform">
            <EndIcon className="text-muted-foreground" size={18} />
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };

import { ApiError } from "@/errors";
import { Path, UseFormSetError } from "react-hook-form";

export const setApiErrors = <T extends object>(
  error: ApiError,
  setError: UseFormSetError<T>,
) => {
  for (const key in error.details) {
    const message = error.details[key];

    setError(key as Path<T>, { message });
  }
};

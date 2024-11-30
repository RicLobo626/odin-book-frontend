import { ApiError } from "@/errors";
import { FieldPath, FieldValues, UseFormSetError } from "react-hook-form";

export const setApiErrors = <T extends FieldValues = FieldValues>(
  error: ApiError,
  setError: UseFormSetError<T>,
) => {
  for (const key in error.details) {
    const message = error.details[key];

    setError(key as FieldPath<T>, { message });
  }
};

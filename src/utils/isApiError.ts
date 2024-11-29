import { ApiError } from "@/errors";

export const isApiError = (error: Error): error is ApiError => {
  return error instanceof ApiError;
};

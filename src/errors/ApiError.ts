import { ApiErrorPayload } from "@/types";

export class ApiError extends Error {
  name: "ApiError";
  details: ApiErrorPayload["details"];
  statusCode: number;

  constructor({ error, details }: ApiErrorPayload, statusCode: number) {
    super(error);
    this.name = "ApiError";
    this.details = details;
    this.statusCode = statusCode;
  }
}

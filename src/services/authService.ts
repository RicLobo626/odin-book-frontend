import { NewUser } from "@/types";
import { apiErrorPayloadSchema } from "@/schemas";
import { ApiError } from "@/errors";

const baseURL = "/api/auth";

export const registerUser = async (body: NewUser) => {
  const response = await fetch(`${baseURL}/register`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  const contentType = response.headers.get("Content-Type");

  if (response.ok) {
    return response.json() as Promise<NewUser>;
  }

  if (contentType?.includes("application/json")) {
    const errorPayload = (await response.json()) as Promise<ApiError>;
    const parsedErrorPayload = apiErrorPayloadSchema.parse(errorPayload);

    throw new ApiError(parsedErrorPayload, response.status);
  }

  throw new Error("Something went wrong");
};

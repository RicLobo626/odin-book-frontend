import { ApiErrorPayload, AuthData, NewUser, UserLogin } from "@/types";
import { apiErrorPayloadSchema } from "@/schemas";
import { ApiError } from "@/errors";

const baseURL = "/api/auth";

// TODO: create fetch wrapper

export const registerUser = async (body: NewUser) => {
  const response = await fetch(`${baseURL}/register`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    return response.json() as Promise<NewUser>;
  }

  const contentType = response.headers.get("Content-Type");

  if (contentType?.includes("application/json")) {
    const errorPayload = (await response.json()) as Promise<ApiErrorPayload>;
    const parsedErrorPayload = apiErrorPayloadSchema.parse(errorPayload);

    throw new ApiError(parsedErrorPayload, response.status);
  }

  throw new Error("Something went wrong");
};

export const loginUser = async (body: UserLogin) => {
  const response = await fetch(`${baseURL}/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    return response.json() as Promise<AuthData>;
  }

  const contentType = response.headers.get("Content-Type");

  if (contentType?.includes("application/json")) {
    const errorPayload = (await response.json()) as Promise<ApiErrorPayload>;
    const parsedErrorPayload = apiErrorPayloadSchema.parse(errorPayload);

    throw new ApiError(parsedErrorPayload, response.status);
  }

  throw new Error("Something went wrong");
};

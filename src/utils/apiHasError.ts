import { APIError } from "../api/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function apiHasError(response: any): response is APIError {
  return response?.reason;
}

import { ApplicationError } from "@/protocols";

export function invalidDataError(details: string[]): ApplicationInvalidateDataError {
  return {
    name: "InvalidDataError",
    message: "Invalid data",
    details,
  };
}

export type ApplicationInvalidateDataError = ApplicationError & {
  details: string[];
};

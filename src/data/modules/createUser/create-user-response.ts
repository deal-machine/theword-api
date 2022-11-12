import { User } from "@entities/user";
import { InvalidEmail } from "@data/errors/invalid-email";
import { InvalidPassword } from "@data/errors/invalid-password";

export type CreateUserResponse = InvalidEmail | InvalidPassword | User;

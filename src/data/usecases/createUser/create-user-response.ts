import { InvalidEmail } from "src/data/errors/invalid-email";
import { User } from "src/domain/entities/user";
import { InvalidPassword } from "src/data/errors/invalid-password";

export type CreateUserResponse = InvalidEmail | InvalidPassword | User;

import { InvalidEmail, InvalidPassword } from "src/domain/errors";
import { User } from "src/domain/entities/user";

export type CreateUserResponse = InvalidEmail | InvalidPassword | User;

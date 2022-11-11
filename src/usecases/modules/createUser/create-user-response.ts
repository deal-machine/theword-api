import { InvalidEmail, InvalidPassword } from "src/entities/errors";
import { UserData } from "src/entities/proto/user";

export type CreateUserResponse = InvalidEmail | InvalidPassword | UserData;

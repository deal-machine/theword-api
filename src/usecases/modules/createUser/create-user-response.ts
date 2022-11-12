import { InvalidEmail, InvalidPassword } from "src/domain/errors";
import { UserData } from "src/domain/proto/user";

export type CreateUserResponse = InvalidEmail | InvalidPassword | UserData;

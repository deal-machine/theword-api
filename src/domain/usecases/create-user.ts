import { User } from "@entities/user";
import { Result } from "@modules/createUser";

export type UserCreateDTO = Omit<User, "id">;

export interface CreateUser {
    createUser: (user: UserCreateDTO) => Promise<Result<User>>;
}

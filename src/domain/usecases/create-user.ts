import { User } from "@entities/user";
import { CreateUserResponse } from "@modules/createUser/create-user-response";

export type UserCreateDTO = Omit<User, "id">;

export interface CreateUser {
    createUser: (user: UserCreateDTO) => Promise<CreateUserResponse>;
}

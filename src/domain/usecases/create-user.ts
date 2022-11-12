import { User } from "src/domain/entities/user";
import { CreateUserResponse } from "../../data/usecases/createUser/create-user-response";

export type UserCreateDTO = Omit<User, "id">;

export interface CreateUser {
    createUser: (user: UserCreateDTO) => Promise<CreateUserResponse>;
}

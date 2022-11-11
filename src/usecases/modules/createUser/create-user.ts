import { UserData } from "src/entities/proto/user";
import { CreateUserResponse } from "./create-user-response";

export interface CreateUser {
    createUser: (user: UserData) => Promise<CreateUserResponse>;
}

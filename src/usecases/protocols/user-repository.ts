import { User } from "src/domain/entities/user";
import { UserCreateDTO } from "../modules/createUser/create-user";

export interface UserRepository {
    findAll: () => Promise<User[]>;
    findByEmail: (email: string) => Promise<User | undefined>;
    create: (user: UserCreateDTO) => Promise<User>;
    exists: (email: string) => Promise<boolean>;
}

import { User } from "@entities/user";
import { UserCreateDTO } from "@usecases/create-user";

export interface UserRepository {
    findAll: () => Promise<User[]>;
    findByEmail: (email: string) => Promise<User | undefined>;
    create: (user: UserCreateDTO) => Promise<User>;
    exists: (email: string) => Promise<boolean>;
}

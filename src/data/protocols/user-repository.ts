import { User } from "@entities/user";

export interface UserRepository {
    findAll: () => Promise<User[]>;
    findByEmail: (email: string) => Promise<User | undefined>;
    create: (user: User) => Promise<User>;
    exists: (email: string) => Promise<boolean>;
}

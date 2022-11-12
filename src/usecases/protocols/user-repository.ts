import { UserData } from "src/domain/entities/user";

export interface UserRepository {
    findAll: () => Promise<UserData[]>;
    findByEmail: (email: string) => Promise<UserData>;
    create: (user: UserData) => Promise<void>;
    exists: (email: string) => Promise<boolean>;
}

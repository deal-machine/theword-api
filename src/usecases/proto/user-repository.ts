import { UserData } from "src/entities/proto/user";

export interface UserRepository {
    findAll: () => Promise<UserData[]>;
    findByEmail: (email: string) => Promise<UserData>;
    create: (user: UserData) => Promise<void>;
    exists: (email: string) => Promise<boolean>;
}

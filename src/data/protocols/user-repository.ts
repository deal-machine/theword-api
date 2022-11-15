import { User } from "@entities/user";

export interface UserRepository {
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    create(user: User): Promise<User>;
    exists({ email }: { email: string }): Promise<boolean>;
}

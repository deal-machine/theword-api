import { UserRepository } from "@data/protocols/user-repository";
import { User } from "@entities/user";
import { prisma } from "..";

export class UserRepositoryPrisma implements UserRepository {
    private readonly users;
    constructor() {
        this.users = prisma.user;
    }

    async findAll(): Promise<User[]> {
        return this.users.findMany();
    }
    async findByEmail(email: string): Promise<User | null> {
        return this.users.findUnique({ where: { email } });
    }
    async create(user: User): Promise<User> {
        return this.users.create({ data: user });
    }
    async exists(email: string): Promise<boolean> {
        return !!this.users.findUnique({ where: { email } });
    }
}

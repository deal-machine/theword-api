import { User } from "@entities/user";
import { UserRepository } from "@data/protocols/user-repository";

export class UserRepositoryInMemory implements UserRepository {
    private readonly userEntity: User[];

    constructor() {
        this.userEntity = [];
    }

    async findAll(): Promise<User[]> {
        return this.userEntity;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userEntity.find((user) => user.email === email);
    }

    async create(user: User): Promise<User> {
        const newUser: User = {
            id: user.id,
            email: user.email,
            name: user.name,
            password: user.password,
        };

        this.userEntity.push(newUser);

        return newUser;
    }

    async exists(email: string): Promise<boolean> {
        const userExists = this.userEntity.find((user) => user.email === email);
        return !!userExists;
    }
}

import { User, UserRepository } from "@modules/createUser";
import { Repository } from "typeorm";
import { theWordDatabase } from "../data-source";
import { UsersEntity } from "../entities/Users";

export class UserRepositoryTypeorm implements UserRepository {
    private readonly userEntity: Repository<User>;
    constructor() {
        this.userEntity = theWordDatabase.getRepository<User>(UsersEntity);
    }

    async findAll(): Promise<User[]> {
        const users = await this.userEntity.find();
        return users;
    }
    async findByEmail(email: string): Promise<User | null> {
        const userExists = await this.userEntity.findOne({ where: { email } });
        return userExists;
    }
    async create(user: User): Promise<User> {
        const userCreate = this.userEntity.create(user);
        await this.userEntity.save(userCreate);
        return userCreate;
    }
    async exists({ email }: { email: string }): Promise<boolean> {
        const userExists = await this.userEntity.findOne({ where: { email } });
        return !!userExists;
    }
}

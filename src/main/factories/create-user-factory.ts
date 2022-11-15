import { UserRepositoryInMemory } from "@infra/database/in-memory";
import { Bcrypt } from "@infra/adapters/encrypter/bcrypt";
import { Uuid } from "@infra/adapters/id-generator/uuid";
import { CreateUserController } from "@controllers/create-user-controller";
import { CreateUserUseCase } from "@modules/createUser/create-user-usecase";
import { UserRepositoryPrisma } from "@infra/database/prisma/repositories/user-repository-prisma";

export class CreateUserFactory {
    static register(): CreateUserController {
        const idGenerator = new Uuid();
        const encrypter = new Bcrypt();
        const userRepository = new UserRepositoryPrisma();
        const createUserUseCase = new CreateUserUseCase({
            userRepo: userRepository,
            encrypter,
            idGenerator,
        });
        return new CreateUserController(createUserUseCase);
    }
}

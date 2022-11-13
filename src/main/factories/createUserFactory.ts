import { UserRepositoryInMemory } from "@infra/database/in-memory/repositories";
import { Bcrypt } from "@infra/adapters/encrypter/bcrypt";
import { Uuid } from "@infra/adapters/id-generator/uuid";
import { CreateUserController } from "@controllers/create-user-controller";
import { CreateUserUseCase } from "@modules/createUser/create-user-usecase";

export const makeCreateUserFactory = (): CreateUserController => {
    const idGenerator = new Uuid();
    const encrypter = new Bcrypt();
    const userRepository = new UserRepositoryInMemory();
    const createUserUseCase = new CreateUserUseCase({
        userRepo: userRepository,
        encrypter,
        idGenerator,
    });
    return new CreateUserController(createUserUseCase);
};

import { UserRepositoryInMemory } from "@infra/database/in-memory/repositories";
import { Bcrypt } from "@infra/adapters/encrypter/bcrypt";
import { Uuid } from "@infra/adapters/id-generator/uuid";
import { CreateUserController } from "@controllers/create-user-controller";
import { CreateUserUseCase } from "@modules/createUser/create-user-usecase";

export const makeCreateUserController = (): CreateUserController => {
    const idGenerator = new Uuid();
    const encrypter = new Bcrypt();
    const userRepository = new UserRepositoryInMemory(idGenerator, encrypter);
    const createUserUseCase = new CreateUserUseCase(userRepository);
    return new CreateUserController(createUserUseCase);
};

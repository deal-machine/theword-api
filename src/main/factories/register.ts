import { UserRepositoryInMemory } from "src/infra/database/in-memory/repositories";
import { Bcrypt } from "src/infra/utils/bcrypt/bcrypt";
import { Uuid } from "src/infra/utils/id-generator/uuid";
import { CreateUserController } from "src/presentation/controllers/create-user-controller";
import { CreateUserUseCase } from "src/usecases/modules/createUser/create-user-usecase";

export const makeCreateUserController = (): CreateUserController => {
    const idGenerator = new Uuid();
    const encrypter = new Bcrypt();
    const userRepository = new UserRepositoryInMemory(idGenerator, encrypter);
    const createUserUseCase = new CreateUserUseCase(userRepository);
    return new CreateUserController(createUserUseCase);
};

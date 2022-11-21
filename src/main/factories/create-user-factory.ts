import { Uuid } from "@infra/adapters/id-generator/uuid";
import { Bcrypt } from "@infra/adapters/encrypter/bcrypt";
import { CreateUserController } from "@controllers/create-user-controller";
import { CreateUserUseCase } from "@modules/createUser/create-user-usecase";
import { UserRepositoryTypeorm } from "@infra/database/typeorm/repositories/UserRepositoryTypeorm";

export class CreateUserFactory {
    static register(): CreateUserController {
        const idGenerator = new Uuid();
        const encrypter = new Bcrypt();
        const userRepository = new UserRepositoryTypeorm();
        const createUserUseCase = new CreateUserUseCase({
            userRepo: userRepository,
            encrypter,
            idGenerator,
        });
        return new CreateUserController(createUserUseCase);
    }
}

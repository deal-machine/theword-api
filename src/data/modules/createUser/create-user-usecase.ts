import { UserRepository } from "@data/protocols/user-repository";
import { Encrypter } from "@data/protocols/encrypter";
import { IdGenerator } from "@data/protocols/id-generator";
import { CreateUser, UserCreateDTO } from "@usecases/create-user";
import { CreateUserResponse } from "./create-user-response";

export class CreateUserUseCase implements CreateUser {
    private readonly userRepository: UserRepository;
    private readonly idGenerator: IdGenerator;
    private readonly encrypter: Encrypter;

    constructor(
        userRepo: UserRepository,
        encrypter: Encrypter,
        idGenerator: IdGenerator
    ) {
        this.userRepository = userRepo;
        this.encrypter = encrypter;
        this.idGenerator = idGenerator;
    }

    async createUser(user: UserCreateDTO): Promise<CreateUserResponse> {
        const newUser = await this.userRepository.create({
            id: this.idGenerator.random(),
            email: user.email.toUpperCase(),
            name: user.name.toUpperCase(),
            password: await this.encrypter.hash(user.password),
        });
        return newUser;
    }
}

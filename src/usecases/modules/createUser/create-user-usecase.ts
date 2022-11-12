import { User } from "src/domain/entities/user";
import { UserRepository } from "../../protocols/user-repository";
import { CreateUser, UserCreateDTO } from "./create-user";
import { CreateUserResponse } from "./create-user-response";

export class CreateUserUseCase implements CreateUser {
    private readonly userRepository: UserRepository;

    constructor(userRepo: UserRepository) {
        this.userRepository = userRepo;
    }

    async createUser(user: UserCreateDTO): Promise<CreateUserResponse> {
        const newUser = await this.userRepository.create(user);
        return newUser;
    }
}

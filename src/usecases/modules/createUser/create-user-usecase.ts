import { UserData } from "src/domain/entities/user";
import { UserRepository } from "../../protocols/user-repository";
import { CreateUser } from "./create-user";
import { CreateUserResponse } from "./create-user-response";

export class CreateUserUseCase implements CreateUser {
    private readonly userRepository: UserRepository;

    constructor(userRepo: UserRepository) {
        this.userRepository = userRepo;
    }

    async createUser(user: UserData): Promise<CreateUserResponse> {
        await this.userRepository.create(user);
        return user;
    }
}

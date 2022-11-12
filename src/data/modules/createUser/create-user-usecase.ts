import { UserRepository } from "@data/protocols/user-repository";
import {
    CreateUser,
    UserCreateDTO,
} from "../../../domain/usecases/create-user";
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

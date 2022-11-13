import {
    User,
    CreateUser,
    CreateUserResponse,
    Encrypter,
    IdGenerator,
    UserCreateDTO,
    UserRepository,
} from "./create-user-protocols";
interface CreateUserConstructor {
    userRepo: UserRepository;
    encrypter: Encrypter;
    idGenerator: IdGenerator;
}

export class CreateUserUseCase implements CreateUser {
    private readonly userRepository: UserRepository;
    private readonly idGenerator: IdGenerator;
    private readonly encrypter: Encrypter;

    constructor({ userRepo, encrypter, idGenerator }: CreateUserConstructor) {
        this.userRepository = userRepo;
        this.encrypter = encrypter;
        this.idGenerator = idGenerator;
    }

    async createUser(user: UserCreateDTO): Promise<CreateUserResponse> {
        const userModel = User.create(user);

        const newUser = await this.userRepository.create({
            id: this.idGenerator.random(),
            email: userModel.email,
            name: userModel.name,
            password: await this.encrypter.hash(user.password),
        });

        return newUser;
    }
}

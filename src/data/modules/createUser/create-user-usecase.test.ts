import {
    User,
    Encrypter,
    IdGenerator,
    UserRepository,
    CreateUser,
    CreateUserUseCase,
} from "./create-user-protocols";

interface SutType {
    sut: CreateUser;
    userRepositoryStub: UserRepository;
    encrypterStub: Encrypter;
    idGeneratorStub: IdGenerator;
}

const makeUserRepository = (): UserRepository => {
    class UserRepositoryStub implements UserRepository {
        async findAll(): Promise<User[]> {
            return [];
        }
        async findByEmail(email: string): Promise<User | undefined> {
            return undefined;
        }
        async create(user: User): Promise<User> {
            return user;
        }
        async exists(email: string): Promise<boolean> {
            return !!email;
        }
    }
    return new UserRepositoryStub();
};
const makeEncrypterStub = (): Encrypter => {
    class EncrypterStub implements Encrypter {
        async hash(password: string): Promise<string> {
            return password + "H4SH";
        }
        async compare({
            password,
            hash,
        }: {
            password: string;
            hash: string;
        }): Promise<boolean> {
            return password === hash;
        }
    }
    return new EncrypterStub();
};
const makeIdGeneratorStub = (): IdGenerator => {
    class IdGeneratorStub implements IdGenerator {
        random(): string {
            return String(Math.floor(Math.random() * 100));
        }
    }
    return new IdGeneratorStub();
};
const makeSut = (): SutType => {
    const userRepositoryStub = makeUserRepository();
    const encrypterStub = makeEncrypterStub();
    const idGeneratorStub = makeIdGeneratorStub();
    const sut = new CreateUserUseCase({
        userRepo: userRepositoryStub,
        encrypter: encrypterStub,
        idGenerator: idGeneratorStub,
    });

    return { sut, userRepositoryStub, encrypterStub, idGeneratorStub };
};

describe("Create User Use Case", () => {
    test("should return new user", async () => {
        const { sut } = makeSut();
        const userDTO = {
            email: "any_email@test.com",
            name: "user test",
            password: "12345",
        };

        const user = await sut.createUser(userDTO);
        expect(user).toBeTruthy();
        expect(user.name).toStrictEqual("USER TEST");
        expect(user.email).toStrictEqual("ANY_EMAIL@TEST.COM");
        expect(user.id).toBeTruthy();
        expect(user.password).toStrictEqual("12345H4SH");
    });
});

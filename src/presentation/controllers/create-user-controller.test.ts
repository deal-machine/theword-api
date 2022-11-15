import {
    Controller,
    CreateUser,
    UserCreateDTO,
    Result,
    User,
    CreateUserController,
    HttpRequest,
} from ".";

interface SutType {
    createUserStub: CreateUser;
    sut: Controller;
}

const makeCreateUser = (): CreateUser => {
    class CreateUserStub implements CreateUser {
        async createUser(user: UserCreateDTO): Promise<Result<User>> {
            return Result.ok<User>({
                id: String(Math.floor(Math.random() * 10)),
                email: user.email,
                name: user.name,
                password: user.password,
            });
        }
    }

    return new CreateUserStub();
};
const makeSut = (): SutType => {
    const createUserStub = makeCreateUser();
    const sut = new CreateUserController(createUserStub);

    return {
        sut,
        createUserStub,
    };
};

describe("Create User Controller", () => {
    test("should return badRequest if body not send", async () => {
        const { sut } = makeSut();
        const response = await sut.handle({});

        expect(response).toBeTruthy();
        expect(response).toHaveProperty("statusCode");
        expect(response.statusCode).toBe(400);
        expect(response).toHaveProperty("body");
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toHaveProperty("field");
        expect(response.body.error.field).toEqual("body");
    });
    test("should return badRequest if not email is provided", async () => {
        const { sut } = makeSut();
        const httpRequest: HttpRequest = {
            body: {
                name: "Any Name",
                password: "any_password",
            },
        };
        const response = await sut.handle(httpRequest);

        expect(response).toBeTruthy();
        expect(response).toHaveProperty("statusCode");
        expect(response.statusCode).toBe(400);

        expect(response).toHaveProperty("body");
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toHaveProperty("field");
        expect(response.body.error.field).toEqual("email");
    });
    test("should return badRequest if not name is provided", async () => {
        const { sut } = makeSut();
        const httpRequest: HttpRequest = {
            body: {
                email: "anyMail@mail.com",
                password: "any_password",
            },
        };
        const response = await sut.handle(httpRequest);

        expect(response).toBeTruthy();
        expect(response).toHaveProperty("statusCode");
        expect(response.statusCode).toBe(400);
        expect(response).toHaveProperty("body");
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toHaveProperty("field");
        expect(response.body.error.field).toEqual("name");
    });
    test("should return badRequest if not password is provided", async () => {
        const { sut } = makeSut();
        const httpRequest: HttpRequest = {
            body: {
                name: "Any Name",
                email: "anyMail@mail.com",
            },
        };
        const response = await sut.handle(httpRequest);

        expect(response).toBeTruthy();
        expect(response).toHaveProperty("statusCode");
        expect(response.statusCode).toBe(400);
        expect(response).toHaveProperty("body");
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toHaveProperty("field");
        expect(response.body.error.field).toEqual("password");
    });
    test("should return serverError if CreateUser throws", async () => {
        const { sut, createUserStub } = makeSut();
        jest.spyOn(createUserStub, "createUser").mockImplementationOnce(() =>
            Promise.reject()
        );
        const httpRequest: HttpRequest = {
            body: {
                name: "Any Name",
                email: "anyMail@mail.com",
                password: "any_password",
            },
        };
        const response = await sut.handle(httpRequest);

        expect(response).toBeTruthy();
        expect(response).toHaveProperty("statusCode");
        expect(response.statusCode).toBe(500);

        expect(response).toHaveProperty("body");
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toEqual("Internal Server Error");
    });
    test("should call CreateUser with correct values", async () => {
        const { sut, createUserStub } = makeSut();
        const createUserSpy = jest.spyOn(createUserStub, "createUser");
        const httpRequest: HttpRequest = {
            body: {
                name: "Any Name",
                email: "anyMail@mail.com",
                password: "any_password",
            },
        };

        await sut.handle(httpRequest);
        expect(createUserSpy).toBeCalledWith({
            name: "Any Name",
            email: "anyMail@mail.com",
            password: "any_password",
        });
    });
    test("should return user on success", async () => {
        const { sut } = makeSut();
        const httpRequest: HttpRequest = {
            body: {
                name: "Any Name",
                email: "anyMail@mail.com",
                password: "any_password",
            },
        };
        const response = await sut.handle(httpRequest);

        expect(response).toBeTruthy();
        expect(response).toHaveProperty("statusCode");
        expect(response.statusCode).toBe(200);
        expect(response).toHaveProperty("body");
        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toHaveProperty("user");
        expect(response.body.data.user).toHaveProperty("id");
        expect(response.body.data.user).toHaveProperty("email");
        expect(response.body.data.user).toHaveProperty("name");
        expect(response.body.data.user).toHaveProperty("password");
    });
});

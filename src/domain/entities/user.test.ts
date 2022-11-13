import { User } from "./user";

describe("User Entity", () => {
    test("should create user entity", () => {
        const newUser = User.create({
            email: "any_mail@test.com",
            name: "Any Name Test",
            password: "Any_passowrd_test",
            id: "1",
        });
        expect(newUser).toBeInstanceOf(User);
        expect(newUser).toHaveProperty("id");
        expect(newUser).toHaveProperty("name");
        expect(newUser).toHaveProperty("email");
        expect(newUser).toHaveProperty("password");
    });
    test("should create user name in upper case", () => {
        const newUser = User.create({
            id: "2",
            name: "Any Name Test",
            email: "any_mail@test.com",
            password: "Any_passowrd_test",
        });
        expect(newUser).toBeInstanceOf(User);
        expect(newUser).toHaveProperty("name");
        expect(newUser.name).toStrictEqual("ANY NAME TEST");
    });
    test("should create user email in upper case", () => {
        const newUser = User.create({
            id: "3",
            name: "Any Name Test",
            email: "any_mail@test.com",
            password: "Any_passowrd_test",
        });
        expect(newUser).toBeInstanceOf(User);
        expect(newUser).toHaveProperty("email");
        expect(newUser.email).toStrictEqual("ANY_MAIL@TEST.COM");
    });
});

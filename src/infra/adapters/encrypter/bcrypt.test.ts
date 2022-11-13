import { Encrypter } from "@data/protocols/encrypter";
import { Bcrypt } from "./bcrypt";

let bcryptAdapter: Encrypter;

describe("Bcrypt Adapter", () => {
    beforeAll(() => {
        bcryptAdapter = new Bcrypt();
    });

    test("should hash a password", async () => {
        const password = "oneTwoThree";
        const hash = await bcryptAdapter.hash(password);

        expect(hash).toBeTruthy();
        expect(hash).not.toEqual(password);
        expect(hash.length).toBeGreaterThan(25);
    });

    test("should compare hash and password", async () => {
        const password = "fourFiveSix";
        const hash = await bcryptAdapter.hash(password);

        const isCorrectPassword = await bcryptAdapter.compare({
            password,
            hash,
        });

        expect(isCorrectPassword).toBeTruthy();

        const isIncorrectPassword = await bcryptAdapter.compare({
            password: "another_password",
            hash,
        });

        expect(isIncorrectPassword).toBeFalsy();
    });
});

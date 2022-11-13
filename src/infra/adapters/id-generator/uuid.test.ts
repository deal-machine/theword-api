import { Uuid } from "./uuid";
import { IdGenerator } from "@data/protocols/id-generator";

let uuidAdapter: IdGenerator;

describe("Uuid Adapter", () => {
    beforeAll(() => {
        uuidAdapter = new Uuid();
    });

    test("should return uuid", () => {
        const uuid = uuidAdapter.random();

        expect(uuid).toBeTruthy();
        expect(uuid.length).toBeGreaterThan(25);
    });

    test("should return many different uuid", () => {
        const uuidOne = uuidAdapter.random();
        const uuidTwo = uuidAdapter.random();

        expect(uuidOne).not.toEqual(uuidTwo);
    });
});

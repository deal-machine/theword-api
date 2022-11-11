import { ITest, Test } from "./index";

let test: ITest;
describe("testing", () => {
    beforeAll(() => {
        test = new Test();
    });
    it("should add 1", () => {
        expect(test.add(4)).toEqual(5);
    });
});
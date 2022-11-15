import { Result } from "./result";

describe("Result Helper", () => {
    it("should return ok result", () => {
        const result = Result.ok<any>({ value: "OK" });
        expect(result).toBeTruthy();
        expect(result.isFailure).toBeFalsy();
        expect(result.isSuccess).toBeTruthy();
    });
    it("should return failure result", () => {
        const result = Result.fail<any>("error message");
        expect(result).toBeTruthy();
        expect(result.isFailure).toBeTruthy();
        expect(result.isSuccess).toBeFalsy();
        expect(result.error).toEqual("error message");
    });
    it("should return getValue result", () => {
        const failResult = Result.fail<any>("error message");
        expect(failResult.getValue()).toBeUndefined();

        const result = Result.ok<any>({ value: "OK" });
        expect(result.getValue()).toEqual({ value: "OK" });
    });
});

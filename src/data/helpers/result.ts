export class Result<T> {
    public isSuccess: boolean;
    public isFailure: boolean;
    public error?: string;
    private value?: T;

    private constructor(isSuccess: boolean, error?: string, value?: T) {
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error;
        this.value = value;

        Object.freeze(this);
    }

    public getValue(): T | undefined {
        return this.value;
    }
    public static ok<U>(value: U): Result<U> {
        return new Result<U>(true, undefined, value);
    }
    public static fail<U>(error: string): Result<U> {
        return new Result<U>(false, error, undefined);
    }
}

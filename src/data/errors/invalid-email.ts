import { UserCaseError } from "./usecase-error";

export class InvalidEmail extends Error implements UserCaseError {
    constructor(email: string) {
        super(`This email ${email} is invalid`);
        this.name = "InvalidEmailError";
    }
}

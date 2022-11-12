import { DomainError } from "./domain-error";

export class InvalidEmail extends Error implements DomainError {
    constructor(email: string) {
        super(`This email ${email} is invalid`);
        this.name = "InvalidEmailError";
    }
}

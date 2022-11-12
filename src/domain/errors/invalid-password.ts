import { DomainError } from "./domain-error";

export class InvalidPassword extends Error implements DomainError {
    constructor() {
        super(`This password is invalid`);
        this.name = "InvalidPasswordName";
    }
}

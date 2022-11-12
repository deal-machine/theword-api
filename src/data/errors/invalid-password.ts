import { UserCaseError } from "./usecase-error";

export class InvalidPassword extends Error implements UserCaseError {
    constructor() {
        super(`This password is invalid`);
        this.name = "InvalidPasswordName";
    }
}

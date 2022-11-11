import { ControllerError } from "./controller-error";

export class MissingParam extends Error implements ControllerError {
    constructor(param: string) {
        super(`Missing param: ${param}`);
        this.name = "MissingParamError";
    }
}

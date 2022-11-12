import { ControllerError } from "./controller-error";

export class ServerError extends Error implements ControllerError {
    constructor() {
        super(`Internal server error`);
        this.name = "ServerError";
    }
}

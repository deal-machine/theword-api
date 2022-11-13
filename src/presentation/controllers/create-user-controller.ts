import { CreateUser } from "@usecases/create-user";
import { badRequest, ok, serverError } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class CreateUserController implements Controller {
    private readonly createUser: CreateUser;

    constructor(createUser: CreateUser) {
        this.createUser = createUser;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            if (!httpRequest.body) return badRequest({ field: "body" });

            const requiredFields = ["email", "name", "password"];
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return badRequest({ field });
                }
            }

            const { email, name, password } = httpRequest.body;

            const newUser = await this.createUser.createUser({
                name,
                email,
                password,
            });

            return ok({ user: newUser });
        } catch (error) {
            return serverError();
        }
    }
}

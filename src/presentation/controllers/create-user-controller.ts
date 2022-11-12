import { CreateUser } from "src/usecases/modules/createUser/create-user";
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
            if (!httpRequest) return badRequest({ field: "httpRequest" });

            const { email, name, password } = httpRequest.body;

            const newUser = await this.createUser.createUser({
                email,
                name,
                password,
            });

            if (!newUser) return badRequest({ field: "new user" });

            return ok({ newUser });
        } catch (error) {
            console.error(error);
            return serverError();
        }
    }
}

import { CreateUser, Response, Controller, HttpRequest, HttpResponse } from ".";

export class CreateUserController implements Controller {
    private readonly createUser: CreateUser;

    constructor(createUser: CreateUser) {
        this.createUser = createUser;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            if (!httpRequest.body) {
                return Response.badRequest({ field: "body" });
            }

            const requiredFields = ["email", "name", "password"];
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return Response.badRequest({ field });
                }
            }

            const { email, name, password } = httpRequest.body;

            const result = await this.createUser.createUser({
                name,
                email,
                password,
            });
            if (result.isFailure) {
                return Response.badRequest(result.error);
            }

            return Response.ok({ user: result.getValue() });
        } catch (error) {
            return Response.serverError();
        }
    }
}

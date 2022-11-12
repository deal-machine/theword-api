import { ServerError } from "../errors/server-error";
import { HttpResponse } from "../protocols/http";

const ok = (data: any): HttpResponse => ({
    data,
    statusCode: 200,
});

const badRequest = (error: any): HttpResponse => ({
    errors: error,
    statusCode: 400,
});

const serverError = (): HttpResponse => ({
    statusCode: 500,
    data: new ServerError(),
});

export { ok, badRequest, serverError };

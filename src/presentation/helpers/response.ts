import { HttpResponse } from "../protocols/http";

export class Response {
    static ok = (data: any): HttpResponse => ({
        body: { data },
        statusCode: 200,
    });

    static badRequest = (error: any): HttpResponse => ({
        body: { error },
        statusCode: 400,
    });

    static serverError = (): HttpResponse => ({
        statusCode: 500,
        body: { error: "Internal Server Error" },
    });
}

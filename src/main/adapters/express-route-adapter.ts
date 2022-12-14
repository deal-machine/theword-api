import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "@presentation/protocols/http";
import { Controller } from "@presentation/protocols/controller";
export class ExpressRouteAdapter {
    static adapt(controller: Controller): any {
        return async (request: Request, response: Response) => {
            const httpRequest: HttpRequest = {
                body: request.body,
                // headers, query ...
            };
            const httpResponse: HttpResponse = await controller.handle(
                httpRequest
            );
            return response
                .status(httpResponse.statusCode)
                .json(httpResponse.body);
        };
    }
}

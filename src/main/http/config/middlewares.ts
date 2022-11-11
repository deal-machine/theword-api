import cors from "cors";
import { config } from "dotenv";
import { Express, json } from "express";

import { errorResponse } from "../middlewares/errorResponse";
import { routes } from "../routes";
import { corsOptions } from "./cors";

export const setupMiddlewares = (app: Express): void => {
    config();
    app.disable("x-powered-by");
    app.use(cors(corsOptions));
    app.use(json());
    app.use(routes);
    app.use(errorResponse);
};

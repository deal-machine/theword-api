import "reflect-metadata";
import express from "express";

import { setupMiddlewares } from "./config/middlewares";
import setupSwagger from "./config/swagger";
import { setupRoutes } from "./config/routes";

const app = express();

setupSwagger(app);
setupMiddlewares(app);
setupRoutes(app);

export default app;

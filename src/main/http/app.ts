import "reflect-metadata";
import express from "express";

import { setupMiddlewares } from "./config/middlewares";
import setupSwagger from "./config/swagger";
import { setupRoutes } from "./config/routes";
import { setupDatabase } from "./config/database";

const app = express();

setupSwagger(app);
setupMiddlewares(app);
setupDatabase();
setupRoutes(app);

export default app;

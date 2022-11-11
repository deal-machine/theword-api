import "reflect-metadata";
import express from "express";

import { setupMiddlewares } from "./config/middlewares";
import setupSwagger from "./config/swagger";

const app = express();

setupSwagger(app);
setupMiddlewares(app);

export default app;

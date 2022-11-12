import { Express } from "express";
import swaggerConfig from "@main/docs/swaggerConfig";
import { serve, setup } from "swagger-ui-express";

export default (app: Express): void => {
    app.use("/docs", serve, setup(swaggerConfig));
};

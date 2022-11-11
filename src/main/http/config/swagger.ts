import { Express } from "express";
import swaggerConfig from "src/shared/docs/swaggerConfig";
import { serve, setup } from "swagger-ui-express";

export default (app: Express): void => {
    app.use('/docs', serve, setup(swaggerConfig));
};
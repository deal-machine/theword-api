import { ExpressRouteAdapter } from "@main/adapters/express-route-adapter";
import { CreateUserFactory } from "@main/factories/create-user-factory";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/", ExpressRouteAdapter.adapt(CreateUserFactory.register()));

export { userRouter };

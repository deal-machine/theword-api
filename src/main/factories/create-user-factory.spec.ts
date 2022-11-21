import request from "supertest";

import app from "@main/http/app";
import { theWordDatabase } from "@infra/database/typeorm/data-source";
import { UserCreateDTO } from "@usecases/create-user";
import { UsersEntity } from "@infra/database/typeorm/entities/Users";

const userToCreate: UserCreateDTO = {
    name: "",
    email: "",
    password: "",
};

describe("Create User Factory", () => {
    beforeAll(async () => {
        await theWordDatabase.initialize();
        await theWordDatabase.runMigrations();
    });
    beforeEach(async () => theWordDatabase.manager.clear(UsersEntity));
    afterAll(async () => theWordDatabase.destroy());

    it("should return 200 on create new user", async () => {
        const { body, status } = await request(app)
            .post("/users")
            .send(userToCreate);

        console.log(body, status);
    });
});

import { User } from "@entities/user";
import { EntitySchema, EntitySchemaOptions } from "typeorm";

const userSchema: EntitySchemaOptions<User> = {
    name: "users",
    columns: {
        id: {
            type: "uuid",
            primary: true,
            nullable: false,
            primaryKeyConstraintName: "users_pkey",
        },
        email: {
            type: "varchar",
            unique: true,
            length: 200,
        },
        name: {
            type: "varchar",
            length: 200,
            nullable: false,
        },
        password: {
            type: "varchar",
            length: 350,
            nullable: false,
        },
    },
    indices: [
        {
            columns: ["email"],
            name: "users_email_key",
            unique: true,
        },
    ],
};

export const UsersEntity = new EntitySchema<User>(userSchema);

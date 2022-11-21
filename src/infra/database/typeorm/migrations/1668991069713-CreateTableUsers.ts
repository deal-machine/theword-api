import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1668991069713 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                schema: "public",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isNullable: false,
                        isPrimary: true,
                        primaryKeyConstraintName: "users_pkey",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                        length: "200",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                        length: "200",
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false,
                        length: "350",
                    },
                ],
                indices: [
                    {
                        columnNames: ["email"],
                        name: "users_email_key",
                        isUnique: true,
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users", true);
    }
}

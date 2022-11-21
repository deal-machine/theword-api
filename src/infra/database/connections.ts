export const testConnection = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "theword-test",
    entities: [`${__dirname}/entities/*.ts`],
    migrations: [`${__dirname}/migrations/*.ts`],
    // cli: {
    //     entitiesDir: "entity",
    //     migrationsDir: "migration",
    //     subscribersDir: "subscriber",
    // },
};

export const postgresConnection = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "theword",
    entities: [`${__dirname}/typeorm/entities/*.ts`],
    migrations: [`${__dirname}/typeorm/migrations/*.ts`],
    // cli: {
    //     entitiesDir: "entity",
    //     migrationsDir: "migration",
    //     subscribersDir: "subscriber"
    // }
};

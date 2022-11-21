import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { postgresConnection, testConnection } from "../connections";

const defineDataSourceOptions = (): DataSourceOptions => {
    const isTest = process.env.NODE_ENV === "test";
    return (isTest ? testConnection : postgresConnection) as DataSourceOptions;
};

export const theWordDatabase = new DataSource(defineDataSourceOptions());

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: [
        "<rootDir>/src/**/*.ts",
        "!<rootDir>/src/**/*-protocols.ts",
        "!**/protocols/**",
        "!<rootDir>/src/main/docs/**",
    ],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/",
    }),
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageThreshold: {
        global: {
            functions: 95,
            lines: 95,
            statements: 95,
            branches: 95,
        },
    },
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: [
        "**/**/*.test.ts",
        "**/**/*.spec.ts",
        "**/__tests__/**/*.[jt]s?(x)",
        "**/tests/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)",
    ],
    transform: {
        ".+\\.ts$": "ts-jest",
    },
};

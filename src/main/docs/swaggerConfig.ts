import {
    modelSchema,
    pathSchema,
    responseSchema,
    securitySchema,
} from "./components";

export default {
    openapi: "3.0.0",
    info: {
        title: "Clean Application Programming Interface",
        description: "API Documentation",
        license: {
            name: "deal-machine",
            url: ""
        },
        tags: [
            {
                name: "pet",
                description: "Everything about your Pets",
            },
            {
                name: "store",
                description: "Access to Petstore orders",
                externalDocs: {
                    description: "Find out more about our store",
                    url: "http://swagger.io"
                }
            },
            {
                name: "user",
                description: "Operations about user"
            }
        ],
    },
    externalDocs: {
        description: "Entre em contato",
        url: "https://www.dealmachine.com.br/contato"
    },
    paths: pathSchema,
    security: [
        {
            BearerAuth: "#/components/security/BearerAuth",
            BasicAuth: "#/components/security/BasicAuth"
        },
    ],
    servers: [
        {
            url: "/api/v1"
        }
    ],
    components: {
        schemas: modelSchema,
        securitySchemes: securitySchema,
        responses: responseSchema
    },
    consumes: ["application/json"],
    produces: ["application/json"],
};
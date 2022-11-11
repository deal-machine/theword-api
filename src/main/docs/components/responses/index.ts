export const responseSchema = {
    IncorrectCredentials: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Status code",
                                        example: "X02",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Credenciais incorretas",
                                    },
                                    field: {
                                        type: "string",
                                        example: "",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    FieldMustBeUnique: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Status code",
                                        example: "X03",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Campo deve ser único",
                                    },
                                    field: {
                                        type: "string",
                                        example: "field",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    BadRequestResponse: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Status code",
                                        example: "X02",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Campo Inválido",
                                    },
                                    field: {
                                        type: "string",
                                        description:
                                            "The field where the error occurred",
                                        example: "field",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    NotFoundResponse: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Internal code",
                                        example: "X06",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Recurso não encontrado",
                                    },
                                    field: {
                                        type: "string",
                                        description:
                                            "The field where the error occurred",
                                        example: "field",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    AuthorizationToken: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Status code",
                                        example: "X02",
                                    },
                                    message: {
                                        type: "string",
                                        description:
                                            "Generic error message",
                                        example: "Campo Inválido",
                                    },
                                    field: {
                                        type: "string",
                                        description:
                                            "Where the error occurred",
                                        example: "bearer token",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    AccessTokenMissing: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Status code",
                                        example: "400",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Token is missing",
                                        example: "Campo Inválido",
                                    },
                                    field: {
                                        type: "string",
                                        description:
                                            "Where the error occurred",
                                        example: "bearer token",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    InvalidBasicAuth: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Status code",
                                        example: "X02",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Campo inválido",
                                    },
                                    field: {
                                        type: "string",
                                        example: "bearer token",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    RefreshTokenExpired: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Internal Status Code",
                                        example: "X02",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example:
                                            "É necessário validar suas credenciais após o uso prolongado da plataforma. Faça login novamente.",
                                    },
                                    field: {
                                        type: "string",
                                        example: "refresh token",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    CannotFindTokens: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Internal Status Code",
                                        example: "X06",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Recurso não encontrado.",
                                    },
                                    field: {
                                        type: "string",
                                        example: "tokens",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    InvalidMaxFieldLenght: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Internal Status Code",
                                        example: "X04",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Tamanho inválido",
                                    },
                                    field: {
                                        type: "string",
                                        example: "token",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    MissingProperty: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Internal Status Code",
                                        example: "X01",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Campo obrigatório",
                                    },
                                    field: {
                                        type: "string",
                                        description:
                                            "this field is required",
                                        example: "field",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    MoreFieldsThanExpected: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Internal Status Code",
                                        example: "X05",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Recurso não encontrado.",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    InvalidField: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Internal Status Code",
                                        example: "X02",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Campo inválido",
                                    },
                                    field: {
                                        type: "string",
                                        example: "field",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    InternalServerError: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        version: {
                            type: "string",
                            description: "API Version",
                            example: "1.0",
                        },
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        description: "Status code",
                                        example: "X00",
                                    },
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Ocorreu um erro",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
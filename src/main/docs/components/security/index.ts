export const securitySchema = {
    BasicAuth: {
        type: "http",
        scheme: "basic",
        description: "Standard HTTP basic authentication applies to all API operations."
    },
    BearerAuth: {
        type: "http",
        scheme: "bearer",
        name: "x-access-token",
        description: "API Token must be provided via Authorization:  header",
        in: "header",
    },
};
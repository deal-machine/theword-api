import AddressSchema from './address';
import OrderSchema from "./order";

export const modelSchema = {
    "Order": OrderSchema,
    "Customer": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64",
                "example": 100000
            },
            "username": {
                "type": "string",
                "example": "fehguy"
            },
            "address": {
                "type": "array",
                "xml": {
                    "name": "addresses",
                    "wrapped": true
                },
                "items": {
                    "$ref": "#/components/schemas/Address"
                }
            }
        },
        "xml": {
            "name": "customer"
        }
    },
    "Address": AddressSchema,
    "Category": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64",
                "example": 1
            },
            "name": {
                "type": "string",
                "example": "Dogs"
            }
        },
        "xml": {
            "name": "category"
        }
    },
    "User": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64",
                "example": 10
            },
            "username": {
                "type": "string",
                "example": "theUser"
            },
            "firstName": {
                "type": "string",
                "example": "John"
            },
            "lastName": {
                "type": "string",
                "example": "James"
            },
            "email": {
                "type": "string",
                "example": "john@email.com"
            },
            "password": {
                "type": "string",
                "example": "12345"
            },
            "phone": {
                "type": "string",
                "example": "12345"
            },
            "userStatus": {
                "type": "integer",
                "description": "User Status",
                "format": "int32",
                "example": 1
            }
        },
        "xml": {
            "name": "user"
        }
    },
    "Tag": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            },
            "name": {
                "type": "string"
            }
        },
        "xml": {
            "name": "tag"
        }
    },
    "Pet": {
        "required": [
            "name",
            "photoUrls"
        ],
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64",
                "example": 10
            },
            "name": {
                "type": "string",
                "example": "doggie"
            },
            "category": {
                "$ref": "#/components/schemas/Category"
            },
            "photoUrls": {
                "type": "array",
                "xml": {
                    "wrapped": true
                },
                "items": {
                    "type": "string",
                    "xml": {
                        "name": "photoUrl"
                    }
                }
            },
            "tags": {
                "type": "array",
                "xml": {
                    "wrapped": true
                },
                "items": {
                    "$ref": "#/components/schemas/Tag"
                }
            },
            "status": {
                "type": "string",
                "description": "pet status in the store",
                "enum": [
                    "available",
                    "pending",
                    "sold"
                ]
            }
        },
        "xml": {
            "name": "pet"
        }
    },
    "ApiResponse": {
        "type": "object",
        "properties": {
            "code": {
                "type": "integer",
                "format": "int32"
            },
            "type": {
                "type": "string"
            },
            "message": {
                "type": "string"
            }
        },
        "xml": {
            "name": "##default"
        }
    },
};
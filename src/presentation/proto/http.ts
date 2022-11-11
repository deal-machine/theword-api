interface HttpRequest {
    body?: any;
}

interface HttpResponse {
    statusCode: number;
    data?: any;
    errors?: any;
}

export { HttpRequest, HttpResponse };

import {CustomError} from "./custom-error";

export class NotFoundError extends CustomError {
    public readonly statusCode = 404;

    constructor(message: string = 'Not Found') {
        super("Route not found");
        this.message = message;
    }

    serializeErrors() {
        return [{msg: this.message}]
    }
}
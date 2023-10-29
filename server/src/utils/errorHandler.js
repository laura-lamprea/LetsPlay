"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    constructor(message, statusNumber = 400) {
        super(message);
        this.name = "ErrorHandler";
        this.statusNumber = statusNumber;
    }
}
exports.default = ErrorHandler;

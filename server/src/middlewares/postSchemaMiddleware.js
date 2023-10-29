"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_validator_1 = require("express-validator");
const errorHandler_1 = tslib_1.__importDefault(require("../utils/errorHandler"));
const gameMiddleware = [
    (0, express_validator_1.body)("country")
        .notEmpty()
        .withMessage("Country is required")
        .isString()
        .withMessage("Country must be a string"),
    (0, express_validator_1.body)("city")
        .notEmpty()
        .withMessage("City is required")
        .isString()
        .withMessage("City must be a string"),
    (0, express_validator_1.body)("sport")
        .notEmpty()
        .withMessage("Sport is required")
        .isString()
        .withMessage("Sport must be a string"),
    (0, express_validator_1.body)("address")
        .notEmpty()
        .withMessage("Address is required")
        .isString()
        .withMessage("Address must be a string"),
    (0, express_validator_1.body)("type")
        .notEmpty()
        .withMessage("Type is required")
        .isString()
        .withMessage("Type must be a string")
        .isIn(["OUTDOOR", "INDOOR", "ADVANCED"])
        .withMessage("Type must be one of OUTDOOR, INDOOR, ADVANCED"),
    (0, express_validator_1.body)("date")
        .notEmpty()
        .withMessage("Date is required"),
    (0, express_validator_1.body)("captain").isString().withMessage("Captain must be a string"),
    (0, express_validator_1.body)("total")
        .notEmpty()
        .withMessage("Total is required")
        .isInt({ min: 0 })
        .withMessage("Total must be a non-negative integer"),
    (0, express_validator_1.body)("price")
        .notEmpty()
        .withMessage("Price is required")
        .isInt({ min: 0 })
        .withMessage("Price must be a non-negative integer"),
    (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, express_validator_1.validationResult)(req).throw();
            return next();
        }
        catch (error) {
            const customInstance = error instanceof errorHandler_1.default;
            const message = customInstance
                ? error.message
                : error;
            const status = customInstance ? error.statusNumber : 400;
            return res.status(status).send({ errors: message });
        }
    }),
];
module.exports = gameMiddleware;

import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import ErrorHandler from "../utils/errorHandler";

const gameMiddleware = [
	body("country")
		.notEmpty()
		.withMessage("Country is required")
		.isString()
		.withMessage("Country must be a string"),
	body("city")
		.notEmpty()
		.withMessage("City is required")
		.isString()
		.withMessage("City must be a string"),
	body("sport")
		.notEmpty()
		.withMessage("Sport is required")
		.isString()
		.withMessage("Sport must be a string"),
	body("address")
		.notEmpty()
		.withMessage("Address is required")
		.isString()
		.withMessage("Address must be a string"),
	body("type")
		.notEmpty()
		.withMessage("Type is required")
		.isString()
		.withMessage("Type must be a string")
		.isIn(["OUTDOOR", "INDOOR", "ADVANCED"])
		.withMessage("Type must be one of OUTDOOR, INDOOR, ADVANCED"),
	body("date")
		.notEmpty()
		.withMessage("Date is required"),
	body("captain").isString().withMessage("Captain must be a string"),
	body("total")
		.notEmpty()
		.withMessage("Total is required")
		.isInt({ min: 0 })
		.withMessage("Total must be a non-negative integer"),
	body("price")
		.notEmpty()
		.withMessage("Price is required")
		.isInt({ min: 0 })
		.withMessage("Price must be a non-negative integer"),

	async (req: Request, res: Response, next: NextFunction) => {
		try {
			validationResult(req).throw();
			return next();
		} catch (error) {
			const customInstance = error instanceof ErrorHandler;
			const message = customInstance
				? error.message
				: error
			const status = customInstance ? error.statusNumber : 400;
			return res.status(status).send({ errors: message });
		}
	},
];

module.exports = gameMiddleware;

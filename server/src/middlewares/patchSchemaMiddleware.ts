import { NextFunction, Request, Response } from "express";
import { body, query, validationResult } from "express-validator";
import { PrismaClient } from '@prisma/client';
import ErrorHandler from "../utils/errorHandler";
const prisma = new PrismaClient();
const gameMiddleware = [
    query("game_id")
        .notEmpty()
        .withMessage("game_id is required")
        .isString()
        .withMessage("game_id must be a string")
        .trim()
        .notEmpty()
        .withMessage("game_id cannot be empty")
        .custom(async (gameId, { req }) => {
            const game = await prisma.game.findUnique({
                where: { id: gameId }
            });
            if (!game) throw new Error("Game not found");

            req.game = game;
        }),
    body("country")
        .optional()
        .notEmpty()
        .withMessage("Country is required")
        .isString()
        .withMessage("Country must be a string"),
    body("city")
        .optional()
        .notEmpty()
        .withMessage("City is required")
        .isString()
        .withMessage("City must be a string"),
    body("sport")
        .optional()
        .notEmpty()
        .withMessage("Sport is required")
        .isString()
        .withMessage("Sport must be a string"),
    body("address")
        .optional()
        .notEmpty()
        .withMessage("Address is required")
        .isString()
        .withMessage("Address must be a string"),
    body("type")
        .optional()
        .notEmpty()
        .withMessage("Type is required")
        .isString()
        .withMessage("Type must be a string")
        .isIn(["OUTDOOR", "INDOOR", "ADVANCED"])
        .withMessage("Type must be one of OUTDOOR, INDOOR, ADVANCED"),
    body("date")
        .optional()
        .notEmpty()
        .withMessage("Date is required"),
    body("captain").optional().isString().withMessage("Captain must be a string"),
    body("total")
        .optional()
        .notEmpty()
        .withMessage("Total is required")
        .isInt({ min: 0 })
        .withMessage("Total must be a non-negative integer"),
    body("price")
        .optional()
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

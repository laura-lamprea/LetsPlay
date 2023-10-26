import { NextFunction, Request, Response } from "express";
import { query, validationResult } from "express-validator";
import ErrorHandler from "../utils/errorHandler";
import { PrismaClient } from '@prisma/client';
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

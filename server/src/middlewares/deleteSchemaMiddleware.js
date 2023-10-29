"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_validator_1 = require("express-validator");
const errorHandler_1 = tslib_1.__importDefault(require("../utils/errorHandler"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const gameMiddleware = [
    (0, express_validator_1.query)("game_id")
        .notEmpty()
        .withMessage("game_id is required")
        .isString()
        .withMessage("game_id must be a string")
        .trim()
        .notEmpty()
        .withMessage("game_id cannot be empty")
        .custom((gameId, { req }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const game = yield prisma.game.findUnique({
            where: { id: gameId }
        });
        if (!game)
            throw new Error("Game not found");
        req.game = game;
    })),
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

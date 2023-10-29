"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errorHandler_1 = tslib_1.__importDefault(require("../utils/errorHandler"));
const createGame_1 = tslib_1.__importDefault(require("../services/createGame"));
const createGame = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertBody = req.body;
        const gameCreated = yield (0, createGame_1.default)(insertBody);
        return res.status(200).send({ message: "success", data: gameCreated });
    }
    catch (error) {
        const customInstance = error instanceof errorHandler_1.default;
        const message = customInstance
            ? error.message
            : "ERROR_CANNOT_CREATE_GAME";
        const status = customInstance ? error.statusNumber : 400;
        return res.status(status).send({ message: message });
    }
});
module.exports = createGame;

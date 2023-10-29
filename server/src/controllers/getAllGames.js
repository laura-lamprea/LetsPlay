"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errorHandler_1 = tslib_1.__importDefault(require("../utils/errorHandler"));
const getAllGames_1 = tslib_1.__importDefault(require("../services/getAllGames"));
const getAllGames = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield (0, getAllGames_1.default)();
        if (games.length === 0)
            throw new errorHandler_1.default("ERROR_GAMES_NOT_FOUND", 404);
        return res.status(200).send({ message: "success", data: games });
    }
    catch (error) {
        const customInstance = error instanceof errorHandler_1.default;
        const message = customInstance
            ? error.message
            : "ERROR_CANNOT_OBTAIN_ALL_GAMES";
        const status = customInstance ? error.statusNumber : 400;
        return res.status(status).send({ message: message });
    }
});
module.exports = getAllGames;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errorHandler_1 = tslib_1.__importDefault(require("../utils/errorHandler"));
const getGameById_1 = tslib_1.__importDefault(require("../services/getGameById"));
const getGameById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { game_id } = req.query;
        const game = yield (0, getGameById_1.default)(game_id);
        if (!game)
            throw new errorHandler_1.default("ERROR_GAME_NOT_FOUND", 404);
        return res.status(200).send({ message: "success", data: game });
    }
    catch (error) {
        const customInstance = error instanceof errorHandler_1.default;
        const message = customInstance
            ? error.message
            : "ERROR_CANNOT_OBTAIN_GAME";
        const status = customInstance ? error.statusNumber : 400;
        return res.status(status).send({ message: message });
    }
});
module.exports = getGameById;

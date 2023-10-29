"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errorHandler_1 = tslib_1.__importDefault(require("../utils/errorHandler"));
const deleteGameById_1 = tslib_1.__importDefault(require("../services/deleteGameById"));
const deleteGameById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { game_id } = req.query;
        const gameDeleted = yield (0, deleteGameById_1.default)(game_id);
        if (!gameDeleted)
            throw new errorHandler_1.default("ERROR_GAME_BY_ID_NOT_FOUND", 404);
        return res.status(200).send({ message: "success" });
    }
    catch (error) {
        const customInstance = error instanceof errorHandler_1.default;
        const message = customInstance
            ? error.message
            : "ERROR_CANNOT_DELETE_GAME";
        const status = customInstance ? error.statusNumber : 400;
        return res.status(status).send({ message: message });
    }
});
module.exports = deleteGameById;

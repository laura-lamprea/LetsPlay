"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errorHandler_1 = tslib_1.__importDefault(require("../utils/errorHandler"));
const PostgresGamesRepository_1 = require("../repositories/PostgresGamesRepository");
const DeleteGameById = (game_id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const gameDeleted = yield (0, PostgresGamesRepository_1.deleteGameById)(game_id);
        return gameDeleted;
    }
    catch (error) {
        throw new errorHandler_1.default("ERROR_DELETING_GAME", 500);
    }
});
exports.default = DeleteGameById;

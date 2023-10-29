"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errorHandler_1 = tslib_1.__importDefault(require("../utils/errorHandler"));
const PostgresGamesRepository_1 = require("../repositories/PostgresGamesRepository");
const UpdateGame = (game_id, data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const gameUpdate = yield (0, PostgresGamesRepository_1.updateGameById)(game_id, data);
        return gameUpdate;
    }
    catch (error) {
        throw new errorHandler_1.default("ERROR_UPDATING_GAME", 500);
    }
});
exports.default = UpdateGame;

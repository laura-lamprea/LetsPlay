"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errorHandler_1 = tslib_1.__importDefault(require("../utils/errorHandler"));
const PostgresGamesRepository_1 = require("../repositories/PostgresGamesRepository");
const GetGameById = (game_id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const game = yield (0, PostgresGamesRepository_1.getGameById)(game_id);
        return game;
    }
    catch (error) {
        throw new errorHandler_1.default("ERROR_OBTAINING_GAME", 500);
    }
});
exports.default = GetGameById;

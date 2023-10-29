"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameById = exports.deleteGameById = exports.updateGameById = exports.createGame = exports.getAllGames = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllGames = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const games = yield prisma.game.findMany();
    return games;
});
exports.getAllGames = getAllGames;
const createGame = (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const newGame = yield prisma.game.create({
        data: data,
    });
    return newGame;
});
exports.createGame = createGame;
const updateGameById = (game_id, data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const updatedGame = yield prisma.game.update({
        where: {
            id: game_id,
        },
        data: data,
    });
    return updatedGame;
});
exports.updateGameById = updateGameById;
const deleteGameById = (game_id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const deletedGame = yield prisma.game.delete({
        where: {
            id: game_id,
        },
    });
    return deletedGame;
});
exports.deleteGameById = deleteGameById;
const getGameById = (game_id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const game = yield prisma.game.findUnique({
        where: {
            id: game_id,
        },
    });
    return game;
});
exports.getGameById = getGameById;

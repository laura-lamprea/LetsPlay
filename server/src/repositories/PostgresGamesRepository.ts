import { PrismaClient } from '@prisma/client';
import { IGames } from '../interfaces/Game';
const prisma = new PrismaClient();

const getAllGames = async () => {
    const games = await prisma.game.findMany();
    return games;
}

const createGame = async (data: IGames) => {
    const newGame = await prisma.game.create({
        data: data,
    })
    return newGame;
}

const updateGameById = async (game_id: string, data: IGames) => {
    const updatedGame = await prisma.game.update({
        where: {
            id: game_id,
        },
        data: data,
    });
    return updatedGame;
}

const deleteGameById = async (game_id: string) => {
    const deletedGame = await prisma.game.delete({
        where: {
            id: game_id,
        },
    });
    return deletedGame;
}

const getGameById = async (game_id: string) => {
    const game = await prisma.game.findUnique({
        where: {
            id: game_id,
        },
    });
    return game;
}

export { getAllGames, createGame, updateGameById, deleteGameById, getGameById };

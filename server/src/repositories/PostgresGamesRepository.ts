import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Obtener todos los juegos
const getAllGames = async () => {
    const games = await prisma.game.findMany();
    return games;
}


export { getAllGames };

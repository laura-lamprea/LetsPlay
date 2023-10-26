import { Request, Response } from 'express';
import ErrorHandler from "../utils/errorHandler";
import getAllGamesService from "../services/getAllGames";

const getAllGames = async (req: Request, res: Response) => {
    try {
        const games = await getAllGamesService();
        if (games.length === 0)
            throw new ErrorHandler("ERROR_GAMES_NOT_FOUND", 404);
        return res.status(200).send({ message: "success", data: games });
    } catch (error) {
        const customInstance = error instanceof ErrorHandler;
        const message = customInstance
            ? error.message
            : "ERROR_CANNOT_OBTAIN_ALL_GAMES";
        const status = customInstance ? error.statusNumber : 400;
        return res.status(status).send({ message: message });
    }
};

module.exports = getAllGames;

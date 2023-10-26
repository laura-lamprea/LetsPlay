import { Request, Response } from 'express';
import ErrorHandler from "../utils/errorHandler";
import createGameService from "../services/createGame";

const createGame = async (req: Request, res: Response) => {
    try {
        const insertBody = req.body;
        const gameCreated = await createGameService(insertBody);
        return res.status(200).send({ message: gameCreated });
    } catch (error) {
        const customInstance = error instanceof ErrorHandler;
        const message = customInstance
            ? error.message
            : "ERROR_CANNOT_CREATE_GAME";
        const status = customInstance ? error.statusNumber : 400;
        return res.status(status).send({ message: message });
    }
};

module.exports = createGame;

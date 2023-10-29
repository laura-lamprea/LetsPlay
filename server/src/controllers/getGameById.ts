import { Request, Response } from 'express';
import ErrorHandler from "../utils/errorHandler";
import getGameByIdService from "../services/getGameById";

const getGameById = async (req: Request, res: Response) => {
    try {
        const { game_id } = req.query;
        const game = await getGameByIdService(game_id as string);
        if (!game)
            throw new ErrorHandler("ERROR_GAME_NOT_FOUND", 404);
        return res.status(200).send({ message: "success", data: game });
    } catch (error) {
        const customInstance = error instanceof ErrorHandler;
        const message = customInstance
            ? error.message
            : "ERROR_CANNOT_OBTAIN_GAME";
        const status = customInstance ? error.statusNumber : 400;
        return res.status(status).send({ message: message });
    }
};

module.exports = getGameById;

import { Request, Response } from 'express';
import ErrorHandler from "../utils/errorHandler";
import updateGameService from "../services/updateGameById";

const updateGameById = async (req: Request, res: Response) => {
    try {
        const { game_id } = req.query;
        const updateBody = req.body;
        const gameUpdated = await updateGameService(game_id as string, updateBody);
        if (!gameUpdated)
            throw new ErrorHandler("ERROR_GAME_BY_ID_NOT_FOUND", 404);
        return res.status(200).send({ message: "success", data: gameUpdated });
    } catch (error) {
        const customInstance = error instanceof ErrorHandler;
        const message = customInstance
            ? error.message
            : "ERROR_CANNOT_UPDATE_GAME";
        const status = customInstance ? error.statusNumber : 400;
        return res.status(status).send({ message: message });
    }
};

module.exports = updateGameById;

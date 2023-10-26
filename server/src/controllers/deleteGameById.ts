import { Request, Response } from 'express';
import ErrorHandler from "../utils/errorHandler";
import deleteGameService from "../services/deleteGameById";

const deleteGameById = async (req: Request, res: Response) => {
    try {
        const { game_id } = req.query;
        const gameDeleted = await deleteGameService(game_id as string);
        if (!gameDeleted)
            throw new ErrorHandler("ERROR_GAME_BY_ID_NOT_FOUND", 404);
        return res.status(200).send({ message: "success" });
    } catch (error) {
        const customInstance = error instanceof ErrorHandler;
        const message = customInstance
            ? error.message
            : "ERROR_CANNOT_DELETE_GAME";
        const status = customInstance ? error.statusNumber : 400;
        return res.status(status).send({ message: message });
    }
};

module.exports = deleteGameById;

import ErrorHandler from "../utils/errorHandler";
import { deleteGameById } from "../repositories/PostgresGamesRepository";

const DeleteGameById = async (game_id: string) => {
    try {
        const gameDeleted = await deleteGameById(game_id as string);
        return gameDeleted;
    } catch (error) {
        throw new ErrorHandler("ERROR_DELETING_GAME", 500);
    }
};

export default DeleteGameById;

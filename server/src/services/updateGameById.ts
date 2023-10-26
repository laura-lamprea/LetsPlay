import ErrorHandler from "../utils/errorHandler";
import { updateGameById } from "../repositories/PostgresGamesRepository";
import { IGames } from "../interfaces/Game";

const UpdateGame = async (game_id: string, data: IGames) => {
    try {
        const gameUpdate = await updateGameById(game_id as string, data);
        return gameUpdate;
    } catch (error) {
        throw new ErrorHandler("ERROR_UPDATING_GAME", 500);
    }
};

export default UpdateGame;

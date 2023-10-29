import ErrorHandler from "../utils/errorHandler";
import { getGameById } from "../repositories/PostgresGamesRepository";

const GetGameById = async (game_id: string) => {
    try {
        const game = await getGameById(game_id as string);
        return game;
    } catch (error) {
        throw new ErrorHandler("ERROR_OBTAINING_GAME", 500);
    }
};

export default GetGameById;

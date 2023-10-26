import ErrorHandler from "../utils/errorHandler";
import { createGame } from "../repositories/PostgresGamesRepository";
import { IGames } from "../interfaces/Game";

const CreateGame = async (data: IGames) => {
    try {
        const gameCreated = await createGame(data);
        return gameCreated;
    } catch (error) {
        throw new ErrorHandler("ERROR_CREATING_GAME", 500);
    }
};

export default CreateGame;

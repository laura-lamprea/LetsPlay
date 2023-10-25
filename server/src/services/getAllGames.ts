import ErrorHandler from "../utils/errorHandler";
import {getAllGames} from "../repositories/PostgresGamesRepository";

const GetAllGames = async () => {
  try {
    const games = await getAllGames();
    return games;
  } catch (error) {
    throw new ErrorHandler("ERROR_OBTAINING_ALL_GAMES", 500);
  }
};

export default GetAllGames;

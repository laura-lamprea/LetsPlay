import { IGames } from '../Game';

export interface IGamesRepository {
    ObtainGames(game_id: string, whereBody: IGames): Promise<IGames[]>
    CreateGame(data: IGames): Promise<IGames[]>
}
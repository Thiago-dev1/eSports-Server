import { GamesRepositories } from "../../repositores/GamesRepositories";

class ListGamesUseCase {

    constructor(private gamesRepository: GamesRepositories) { }

    async execute() {
        const games = await this.gamesRepository.listAllGames()

        return games
    }
}

export { ListGamesUseCase }
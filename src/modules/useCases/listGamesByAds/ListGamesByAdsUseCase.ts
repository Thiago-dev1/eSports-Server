import { GamesRepositories } from "../../repositores/GamesRepositories";

class ListGamesByAdsUseCase {

    constructor(private gamesRepository: GamesRepositories) { }

    async execute(id: string) {
        const games = await this.gamesRepository.listGameByAds(id)

        return games
    }
}

export { ListGamesByAdsUseCase }
import { GamesRepositories } from "../../repositores/GamesRepositories";
import { ListGamesByAdsController } from "./ListGamesByAdsController";
import { ListGamesByAdsUseCase } from "./ListGamesByAdsUseCase";

const gamesRepository = GamesRepositories.getInstance()
const listGamesByAdsUseCase =  new ListGamesByAdsUseCase(gamesRepository)
const listGamesByAdsController = new ListGamesByAdsController(listGamesByAdsUseCase)

export { listGamesByAdsController }
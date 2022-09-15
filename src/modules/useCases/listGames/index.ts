import { GamesRepositories } from "../../repositores/GamesRepositories";
import { ListGamesController } from "./ListGamesController";
import { ListGamesUseCase } from "./ListGamesUseCase";

const gamesRepository = GamesRepositories.getInstance()
const listGamesUseCase =  new ListGamesUseCase(gamesRepository)
const listGamesController = new ListGamesController(listGamesUseCase)

export { listGamesController }
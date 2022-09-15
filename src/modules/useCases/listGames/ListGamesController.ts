import { Request, Response } from "express";
import { ListGamesUseCase } from "./ListGamesUseCase";

class ListGamesController {

    constructor(private listGamesUseCase: ListGamesUseCase) { }

    async handle(req: Request, res: Response) {
        const games = await this.listGamesUseCase.execute()


        return res.status(200).json(games)
    }
}


export { ListGamesController }
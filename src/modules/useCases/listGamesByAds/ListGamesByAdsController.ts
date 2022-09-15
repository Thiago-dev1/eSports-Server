import { Request, Response } from "express";
import { ListGamesByAdsUseCase } from "./ListGamesByAdsUseCase";

class ListGamesByAdsController {

    constructor(private listGamesByAdsUseCase: ListGamesByAdsUseCase) { }

    async handle(req: Request, res: Response) {
        const id = req.params.id
        const games = await this.listGamesByAdsUseCase.execute(id)


        return res.status(200).json(games)
    }
}


export { ListGamesByAdsController }
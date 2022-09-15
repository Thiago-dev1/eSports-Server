import { Request, Response } from "express";

import { ListDiscordByAdsUseCase } from "./ListDiscordByAdsUseCase";


class ListDiscordByAdsController {
    constructor(private listDiscordByAdsUseCase: ListDiscordByAdsUseCase) { }

    async handle(req: Request, res: Response) {
        const adId = req.params.id

        const ad = await this.listDiscordByAdsUseCase.execute(adId)

        return res.status(200).json({
            discord: ad.discord
        })
    }
}

export { ListDiscordByAdsController }
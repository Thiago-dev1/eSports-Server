import { Request, Response } from "express";
import { CreateAdsUseCase } from "./CreateAdsUseCase";


class CreateAdsController {

    constructor(private createAdsUseCase: CreateAdsUseCase) {}

    async handle(req: Request, res: Response) {

        const { name, discord, gameId, hourEnd, hourStart, useVoiceChannel, weekDays, yearsPlaying } = req.body

        const ad = await this.createAdsUseCase.execute({name, discord, gameId, hourEnd, hourStart, useVoiceChannel, weekDays, yearsPlaying})

        return res.status(201).json(ad)
    }
}

export { CreateAdsController }
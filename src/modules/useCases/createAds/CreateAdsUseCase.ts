import { AdsRepositories } from "../../repositores/AdsRepositories";


interface IRequest {
    gameId: string,
    name: string,
    discord: string,
    yearsPlaying: number,
    weekDays: [],
    hourStart: string,
    hourEnd: string,
    useVoiceChannel: boolean
}  

class CreateAdsUseCase {

    constructor(private adsRepository: AdsRepositories) {}

    async execute({name, discord, gameId, hourEnd, hourStart, useVoiceChannel, weekDays, yearsPlaying}: IRequest) {

        const ad = await this.adsRepository.create({name, discord, gameId, hourEnd, hourStart, useVoiceChannel, weekDays, yearsPlaying})

        return ad
    }
}

export { CreateAdsUseCase }
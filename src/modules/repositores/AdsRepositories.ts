import {PrismaClient} from "@prisma/client"
import { convertHourStringToMinutes } from "../../utils/convert-hour-string-to-minutes"


interface ICreateAdsDTO {
    gameId: string,
    name: string,
    discord: string,
    yearsPlaying: number,
    weekDays: [],
    hourStart: string,
    hourEnd: string,
    useVoiceChannel: boolean
}

class AdsRepositories {
    private prisma: any

    private static INSTANCE: AdsRepositories

    private constructor() {
        this.prisma = new PrismaClient()
    }


    public static getInstance(): AdsRepositories {
        if (!AdsRepositories.INSTANCE) {
            AdsRepositories.INSTANCE = new AdsRepositories()
        }
        return AdsRepositories.INSTANCE
    }

    async create({name, discord, gameId, hourEnd, hourStart, useVoiceChannel, weekDays, yearsPlaying}: ICreateAdsDTO) {
         const ad = await this.prisma.ad.create({
            data: {
                gameId: gameId,
                name: name,
                discord: discord,
                yearsPlaying: yearsPlaying,
                weekDays: weekDays.join(','),
                hourStart: convertHourStringToMinutes(hourStart),
                hourEnd: convertHourStringToMinutes(hourEnd),
                useVoiceChannel: useVoiceChannel
            }
        })

        return ad
    }
}

export { AdsRepositories }
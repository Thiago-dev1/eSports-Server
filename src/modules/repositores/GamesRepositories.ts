import {PrismaClient} from "@prisma/client"
import { convertMinutesToHourString } from "../../utils/convert-minutes-to-hour-string"

class GamesRepositories {

    private prisma: any

    private static INSTANCE: GamesRepositories

    private constructor() {
        this.prisma = new PrismaClient()
    }

    public static getInstance(): GamesRepositories {
        if (!GamesRepositories.INSTANCE) {
            GamesRepositories.INSTANCE = new GamesRepositories()
        }
        return GamesRepositories.INSTANCE
    }

    async listAllGames() {
        const games =  await this.prisma.game.findMany({
            include: {
                _count: {
                    select: {
                        Ad: true
                    }
                }
            }
        })

        return games
    }

    async listGameByAds(id: string) {
        const gameId = id

        const ads = await this.prisma.ad.findMany({
            select: {
                id: true,
                name: true,
                weekDays: true,
                useVoiceChannel: true,
                yearsPlaying: true,
                hourStart: true,
                hourEnd: true
            },
            where: {
                gameId
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return ads.map((ad: { weekDays: string; hourStart: any; hourEnd: any }) => {
            return {
                ...ad,
                weekDays: ad.weekDays.split(','),
                hourStart: convertMinutesToHourString(ad.hourStart),
                hourEnd: convertMinutesToHourString(ad.hourEnd)
            }
    
        })
    }
}

export { GamesRepositories }
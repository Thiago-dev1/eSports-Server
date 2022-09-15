import { Router } from "express";

import { PrismaClient} from "@prisma/client"

import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string"


const gamesRoutes = Router()

const prisma = new PrismaClient()

gamesRoutes.get('/', async (req, res) => {
    const games =  await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    Ad: true
                }
            }
        }
    })

    return res.status(200).json(games)
})

gamesRoutes.get('/:id/ads', async (req, res) => {
    const gameId = req.params.id

    const ads = await prisma.ad.findMany({
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
    
    
    return res.status(200).json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd)
        }

    }))
})


export { gamesRoutes }
import express from "express"
import { PrismaClient } from "@prisma/client"


const app = express()
const prisma = new PrismaClient()

app.get('/games', async (req, res) => {
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

app.post('/ads', (req, res) => {
    return res.status(201).json([])
})

app.get('/games/:id/ads', async (req, res) => {
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
            weekDays: ad.weekDays.split(',')
        }

    }))
})

app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id

     const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
     })

    return res.status(200).json({
        discord: ad.discord
    })
})

app.listen(3333)
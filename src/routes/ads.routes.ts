import { Router } from "express";

import { PrismaClient} from "@prisma/client"



import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes"



const adsRoutes = Router()


const prisma = new PrismaClient()


adsRoutes.post('/', async (req, res) => {
    const body = req.body

    // colocando no banco de dados
    const ad = await prisma.ad.create({
        data: {
            gameId: body.gameId,
            name: body.name,
            discord: body.discord,
            yearsPlaying: body.yearsPlaying,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd:convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        }
    })

    return res.status(201).json(ad)
})



adsRoutes.get('/:id/discord', async (req, res) => {
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


export { adsRoutes }
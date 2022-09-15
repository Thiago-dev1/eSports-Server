import { Router } from "express";

import { PrismaClient} from "@prisma/client"



import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes"
import { createAdsControler } from "../modules/useCases/createAds";



const adsRoutes = Router()


const prisma = new PrismaClient()


adsRoutes.post('/', async (req, res) => {
    return createAdsControler.handle(req, res)
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
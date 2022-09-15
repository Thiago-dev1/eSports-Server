import { Router } from "express";

import { PrismaClient} from "@prisma/client"



import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes"
import { createAdsControler } from "../modules/useCases/createAds";
import { listDiscordByAdsController } from "../modules/useCases/listDiscordByAds";



const adsRoutes = Router()


const prisma = new PrismaClient()


adsRoutes.post('/', async (req, res) => {
    return createAdsControler.handle(req, res)
})



adsRoutes.get('/:id/discord', async (req, res) => {
    return listDiscordByAdsController.handle(req, res)
})


export { adsRoutes }
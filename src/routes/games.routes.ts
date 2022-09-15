import { Router } from "express";

import { PrismaClient} from "@prisma/client"

import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string"
import { listGamesController } from "../modules/useCases/listGames";
import { listGamesByAdsController } from "../modules/useCases/listGamesByAds";


const gamesRoutes = Router()

const prisma = new PrismaClient()

gamesRoutes.get('/', async (req, res) => {


    return listGamesController.handle(req, res)
})

gamesRoutes.get('/:id/ads', async (req, res) => {
    
    return listGamesByAdsController.handle(req, res)
    
})


export { gamesRoutes }
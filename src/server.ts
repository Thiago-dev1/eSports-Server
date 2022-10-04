import express from "express"
import cors from "cors"

import { router } from "./routes"


import { PrismaClient} from "@prisma/client"
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes"
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string"


const app = express()

app.use(express.json())
app.use(cors())


app.use(router)

app.listen(3333, () => console.log("Server is running 3333"))
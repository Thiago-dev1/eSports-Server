import { AdsRepositories } from "../../repositores/AdsRepositories";
import { ListDiscordByAdsController } from "./ListDiscordByAdsController";
import { ListDiscordByAdsUseCase } from "./ListDiscordByAdsUseCase";


const adsRepository = AdsRepositories.getInstance()
const listDiscordByAdsUseCase = new ListDiscordByAdsUseCase(adsRepository)
const listDiscordByAdsController = new ListDiscordByAdsController(listDiscordByAdsUseCase)

export { listDiscordByAdsController }
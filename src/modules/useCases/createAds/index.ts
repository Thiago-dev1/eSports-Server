import { AdsRepositories } from "../../repositores/AdsRepositories";
import { CreateAdsController } from "./CreateAdsController";
import { CreateAdsUseCase } from "./CreateAdsUseCase";


const adsRepository = AdsRepositories.getInstance()
const createAdsUseCase = new CreateAdsUseCase(adsRepository)
const createAdsControler = new CreateAdsController(createAdsUseCase)


export { createAdsControler }
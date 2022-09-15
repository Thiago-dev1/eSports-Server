import { AdsRepositories } from "../../repositores/AdsRepositories";


class ListDiscordByAdsUseCase {
    constructor(private adsRepository: AdsRepositories) {}

    async execute(adId: string) {
        const ad = await this.adsRepository.discordByAds(adId)

        return ad
    }
}


export { ListDiscordByAdsUseCase }
import {PrismaClient} from "@prisma/client"

class GamesRepositories {

    private prisma: any

    private static INSTANCE: GamesRepositories

    private constructor() {
        this.prisma = new PrismaClient()
    }

    public static getInstance(): GamesRepositories {
        if (!GamesRepositories.INSTANCE) {
            GamesRepositories.INSTANCE = new GamesRepositories()
        }
        return GamesRepositories.INSTANCE
    }

    async listAllGames() {
        const games =  await this.prisma.game.findMany({
            include: {
                _count: {
                    select: {
                        Ad: true
                    }
                }
            }
        })

        return games
    }
}

export { GamesRepositories }
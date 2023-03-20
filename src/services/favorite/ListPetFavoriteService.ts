import prismaClient from "../../prisma";

interface FavoriteRequest {
    user_id: string;
}

class ListPetFavoriteService {
    async execute({ user_id }: FavoriteRequest) {
        const findByUser = await prismaClient.favorite.findMany({
            where: {
                user_id: user_id
            }
        })

        return findByUser;
    }
}

export { ListPetFavoriteService }

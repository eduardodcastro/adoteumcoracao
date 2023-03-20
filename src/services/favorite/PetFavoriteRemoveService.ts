import prismaClient from "../../prisma";

interface FavoriteRequest {
    favorite_id: string;
}

class PetFavoriteRemoveService {
    async execute({ favorite_id }: FavoriteRequest) {
        
        const favoriteItem = await prismaClient.favorite.delete({
           where: {
            id: favorite_id,
           }
        })

        return favoriteItem;
    }
}

export { PetFavoriteRemoveService }

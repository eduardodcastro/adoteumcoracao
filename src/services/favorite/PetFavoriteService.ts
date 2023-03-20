import prismaClient from "../../prisma";

interface FavoriteRequest {
    user_id: string;
    pet_id: string;
}

class PetFavoriteService {
    async execute({ user_id, pet_id }: FavoriteRequest) {
        
        const petFavorite = await prismaClient.favorite.create({
           data: {
            user_id: user_id,
            pet_id: pet_id,
           }
        })

        return petFavorite;
    }
}

export { PetFavoriteService }

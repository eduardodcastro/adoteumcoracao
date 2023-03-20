import { Request, Response } from 'express'
import { PetFavoriteRemoveService } from '../../services/favorite/PetFavoriteRemoveService';

class PetFavoriteRemoveController {
    async handle(req: Request, res: Response) {

        const favorite_id = req.query.favorite_id as string;

        const petFavoriteRemoveService = new PetFavoriteRemoveService();

        const favoriteItem = await petFavoriteRemoveService.execute({
            favorite_id
        })

        return res.json(favoriteItem);
    }
}

export { PetFavoriteRemoveController }

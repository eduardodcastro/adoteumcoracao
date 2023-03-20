import { Request, Response } from 'express'
import { PetFavoriteService } from '../../services/favorite/PetFavoriteService';

class PetFavoriteController {
    async handle(req: Request, res: Response) {

        const {user_id, pet_id} = req.body;

        const petFavoriteService = new PetFavoriteService();

        const petFavorite = await petFavoriteService.execute({
            user_id,
            pet_id
        })

        return res.json(petFavorite);
    }
}

export { PetFavoriteController }

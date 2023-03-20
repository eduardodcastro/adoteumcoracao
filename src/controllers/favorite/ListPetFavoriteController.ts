import { Request, Response } from 'express'
import { ListPetFavoriteService } from '../../services/favorite/ListPetFavoriteService';

class ListPetFavoriteController {
    async handle(req: Request, res: Response) {

        const user_id = req.query.user_id as string;

        const listPetFavoriteService = new ListPetFavoriteService();

        const favorites = await listPetFavoriteService.execute({
            user_id
        })

        return res.json(favorites);
    }
}

export { ListPetFavoriteController }
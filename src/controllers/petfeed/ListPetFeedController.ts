import { Request, Response } from 'express'
import { ListPetFeedService } from '../../services/petfeed/ListPetFeedService';

class ListPetFeedController {
    async handle(req: Request, res: Response) {

        const listPetFeedService = new ListPetFeedService;

        const pet = await listPetFeedService.execute();

        return res.json(pet);
    }
}

export { ListPetFeedController }
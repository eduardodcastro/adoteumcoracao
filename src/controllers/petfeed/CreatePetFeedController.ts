import { Request, Response } from 'express'
import { CreatePetFeedService } from '../../services/petfeed/CreatePetFeedService'

class CreatePetFeedController {
    async handle(req: Request, res: Response) {
        const { name, description, user_id } = req.body;

        // initial service
        const createPetFeedService = new CreatePetFeedService();

        // execute service
        if(!req.file) {
            throw new Error("Error upload file")
        } else {
            const { originalname, filename: photo } = req.file;

            const pet = await createPetFeedService.execute({
                name, 
                description,
                photo,
                user_id
            });
    
            // return results for user request
            return res.json(pet)
        }
    }
}

export { CreatePetFeedController }
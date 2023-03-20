import { Request, Response } from 'express'
import { PetAdoptedService } from '../../services/petfeed/PetAdoptedService';

class PetAdoptedController {
    async handle(req: Request, res: Response) {

        const { pet_id } = req.body;

        const petAdoptedService = new PetAdoptedService();

        const pet = await petAdoptedService.execute({
            pet_id
        })

        return res.json(pet);
    }
}

export { PetAdoptedController }

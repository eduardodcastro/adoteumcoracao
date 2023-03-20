import { Request, Response } from 'express'
import { CreateMessageService } from '../../services/message/CreateMessageService';

class CreateMessageController {
    async handle(req: Request, res: Response) {

        const {description, user_id, pet_id} = req.body;

        const createMessageService = new CreateMessageService();

        const messageItem = await createMessageService.execute({
            description,
            user_id,
            pet_id
        })

        return res.json(messageItem);
    }
}

export { CreateMessageController }

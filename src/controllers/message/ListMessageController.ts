import { Request, Response } from 'express'
import { ListMessageService } from '../../services/message/ListMessageService';

class ListMessageController {
    async handle(req: Request, res: Response) {

        const user_id = req.query.user_id as string;

        const listMessageService = new ListMessageService();

        const messages = await listMessageService.execute({
            user_id
        })

        return res.json(messages);
    }
}

export { ListMessageController }
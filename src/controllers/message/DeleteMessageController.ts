import { Request, Response } from 'express'
import { DeleteMessageService } from '../../services/message/DeleteMessageService';

class DeleteMessageController {
    async handle(req: Request, res: Response) {

        const message_id = req.query.message_id as string;

        const deleteMessageService = new DeleteMessageService();

        const messageItem = await deleteMessageService.execute({
            message_id
        })

        return res.json(messageItem);
    }
}

export { DeleteMessageController }

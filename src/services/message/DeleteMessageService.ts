import prismaClient from "../../prisma";

interface MessageRequest {
    message_id: string;
}

class DeleteMessageService {
    async execute({ message_id }: MessageRequest) {
        
        const messageItem = await prismaClient.message.delete({
           where: {
            id: message_id,
           }
        })

        return messageItem;
    }
}

export { DeleteMessageService }

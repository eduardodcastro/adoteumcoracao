import prismaClient from "../../prisma";

interface ItemRequest {
    description: string;
    user_id: string;
    pet_id: string;
}

class CreateMessageService {
    async execute({ description, user_id, pet_id }: ItemRequest) {
        
        const messageItem = await prismaClient.message.create({
           data: {
            description: description,
            user_id: user_id,
            pet_id: pet_id
           }
        })

        return messageItem;
    }
}

export { CreateMessageService }

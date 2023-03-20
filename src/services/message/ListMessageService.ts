import prismaClient from "../../prisma";

interface MessageRequest {
    user_id: string;
}

class ListMessageService {
    async execute({ user_id }: MessageRequest) {
        const findByUser = await prismaClient.message.findMany({
            where: {
                user_id: user_id
            }
        })

        return findByUser;
    }
}

export { ListMessageService }

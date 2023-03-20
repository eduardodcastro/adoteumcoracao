import prismaClient from '../../prisma'

interface FeedRequest {
    name: string;
    description: string;
    photo: string;
    user_id: string
}

class CreatePetFeedService {
    async execute({ name, description, photo, user_id }: FeedRequest) {

        const pet = await prismaClient.pet.create({
            data: {
                name: name,
                description: description,
                photo: photo,
                user_id: user_id
            },
            // what will be returned by the database
            select: {
                id: true,
                name: true,
                description: true, 
                photo: true,
                user_id: true
            }
        })

        return pet;
    }
}

export { CreatePetFeedService }
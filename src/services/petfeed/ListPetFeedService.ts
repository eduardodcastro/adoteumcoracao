import prismaClient from '../../prisma'

class ListPetFeedService {
    async execute() {

        const pet = await prismaClient.pet.findMany({
            select: {
                id: true,
                name: true,
                photo: true,
                adopted: true
            }
        })

        return pet;
    }
}

export { ListPetFeedService }
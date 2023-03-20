import prismaClient from "../../prisma";

interface PetRequest {
    pet_id: string;
}

class PetAdoptedService {
    async execute({ pet_id }: PetRequest) {
        
        const pet = await prismaClient.pet.update({
           where: {
            id: pet_id,
           },
           data: {
            adopted: true
           }
        })

        return pet;
    }
}

export { PetAdoptedService }

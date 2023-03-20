import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest {
    name: string;
    email: string;
    password: string;
    photo: string;
}

class CreateUserService {
    async execute({ name, email, password, photo }: UserRequest) {

        // check if you already sent email
        if(!email) {
            throw new Error("Email incorrect.")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new Error("Email already exists.")
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                photo: photo
            },
            // what will be returned by the database
            select: {
                id: true,
                name: true,
                email: true, 
                photo: true
            }
        })

        return user;
    }
}

export { CreateUserService }
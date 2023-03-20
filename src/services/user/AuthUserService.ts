import prismaClient from '../../prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        // check if email exists
        const user = await prismaClient.user.findFirst({
            where: {
                email: email    
            }
        })

        if(!user) {
            throw new Error("User/email not fount")
        }
        
        // check if the password is correct
        // user.password -> user table db, password field in table db
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("User/password incorrect.")
        }

        // if everything went well, let's generate the user token
        const token = sign(
        {
            name: user.name,
            email: user.email
        },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            photo: user.photo,
            token: token
        }
    }
}

export { AuthUserService };
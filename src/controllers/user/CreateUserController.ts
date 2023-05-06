import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {

        const { name, email, password } = req.body;

        // initial service
        const createUserService = new CreateUserService();

        // execute service
        if(!req.file) {
            throw new Error("Error upload file")
        } else {
            const { originalname, filename: photo } = req.file;

            const user = await createUserService.execute({
                name, 
                email,
                password,
                photo
            });
    
            // return results for user request
            return res.json(user)
        }
    }
}

export { CreateUserController }
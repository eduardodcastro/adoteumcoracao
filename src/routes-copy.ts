import { Router, Request, Response } from 'express';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
    // throw new Error(`Error when making this request.`);
    return res.json({ request: true })
})

export { router };
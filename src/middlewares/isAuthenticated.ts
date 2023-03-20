import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

declare module "express" { 
    export interface Request {
        user_id: string
    }
}

interface Payload {
    // sub -> id_user in token
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {

    // receive the token
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        // validate token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        // retrieve the id of the token and put it inside a user_id variable inside the req
        req.user_id = sub;

        return next();

    } catch (error) {
        return res.status(401).end();
    }
}
import express, {Request, Response} from "express";
import {responseResolver} from "../../utils/responseResolver";
import jwt from "jsonwebtoken"
import {catchError} from "../../utils/catchError";

const router = express.Router()

router.post("/login", catchError(async (request: Request, response: Response) => {
    const {username, password} = request.body

        if (!username || !password) {
            response.status(400)
            throw new Error("username and password are required")
        }

        // create token of JWT
        const _token = jwt.sign({username}, process.env.SECRET_KEY as string, {expiresIn: "1h"})

        return response.json(responseResolver(200, "success", {token: _token}))
}))

export default router
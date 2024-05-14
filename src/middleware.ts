import ErrorMessage from "./api/interfaces/ErrorMessage";
import { NextFunction, Request, Response } from 'express';
import {responseResolver} from "./utils/responseResolver";

export function errorHandler(err: Error, req: Request, res: Response<ErrorMessage>, next: NextFunction) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500
    res.json(responseResolver(statusCode, err.message, undefined))
}
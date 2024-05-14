import authRouter from './auth/index'
import express from "express";

const router = express()

router.use('/auth', authRouter)

export default router
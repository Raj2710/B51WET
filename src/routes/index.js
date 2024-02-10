import express from 'express'
import UserRoutes from './user.js'
const router = express.Router()

router.use('/user',UserRoutes)

export default router
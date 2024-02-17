import express from 'express'
import UserController from '../controller/user.js'
const router = express.Router()

router.post('/create',UserController.signUp)
router.post('/login',UserController.login)


export default router
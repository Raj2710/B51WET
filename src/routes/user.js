import express from 'express'
import UserController from '../controller/user.js'
import Validate from '../middleware/Validate.js'
import AdminGuard from '../middleware/AdminGuard.js'
const router = express.Router()

router.get('/',Validate,AdminGuard,UserController.getAllUsers)
router.get('/:id',Validate,UserController.getUserById)
router.post('/signup',UserController.signUp)
router.post('/login',UserController.login)

export default router
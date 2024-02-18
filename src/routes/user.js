import express from 'express'
import SuperAdminGuard from '../middleware/SuperAdminGuard.js'
import UserController from '../controller/user.js'
const router = express.Router()

router.post('/create',SuperAdminGuard,UserController.signUp)
router.post('/login',UserController.login)
router.get('/',SuperAdminGuard,UserController.getAllUsers)
router.get('/:id',SuperAdminGuard,UserController.getUserById)


export default router
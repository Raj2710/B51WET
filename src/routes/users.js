import express from 'express'
import UserController from '../controller/user.js'
const router = express.Router()

router.get('/',UserController.getAllUsers)
router.post('/',UserController.createUser)
router.get('/:id',UserController.getUserById)
router.put('/:id',UserController.editUserById)
router.delete('/:id',UserController.deleteUserById)

export default router
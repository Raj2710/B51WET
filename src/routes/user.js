import {Router} from 'express'
import UserController from '../controller/user.js'
const router = Router()

router.get('/',UserController.getAllUsers)
router.get('/:id',UserController.getUserById)
router.post('/',UserController.addUser)
router.put('/:id',UserController.editUserById)
router.delete('/:id',UserController.deleteUserById)

export default router
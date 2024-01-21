import {Router} from 'express'
import UserRouter from './user.js'
const router = Router()

router.get('/',(req,res)=>{
    res.status(200).send(`<h1>Welcome to Express</h1>`)
})

router.use('/user',UserRouter)

export default router
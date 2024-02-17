import express from 'express'
import RequestRoutes from './request.js'
import UserRoutes from './user.js'
const router = express.Router()

router.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Backend of Zendesk</h1>`)
})

router.use('/request',RequestRoutes)
router.use('/user',UserRoutes)

export default router
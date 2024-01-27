import express from 'express'
import cors from 'cors'
import AppRoutes from './src/routes/index.js'
const PORT = process.env.PORT || 8000
const app = express()
app.use(cors())
app.use(express.json())
app.use(AppRoutes)

app.listen(PORT,()=>console.log(`App is listening ${PORT}`))
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

export default mongoose
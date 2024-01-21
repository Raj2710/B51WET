// const express = require('express')//importing express common js import
import express from 'express'//ES6 Sytax for Importing the package same as react
import AppRoutes from './routes/index.js'
const app = express()//creating an express app
const PORT = process.env.PORT || 8000
app.use(express.json())
app.use(AppRoutes)

app.listen(PORT,()=>console.log(`App is running in ${PORT}`))
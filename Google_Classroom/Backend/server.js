import express from "express"
import colors from "colors"

import dotenv from "dotenv"
import cors from 'cors'
const PORT = process.env.PORT || 7001
const app = express()
dotenv.config()
app.use(express.json())

app.use(cors())

import connectDB from './config/db.js'
import studentRoute from "./routes/studentRoute.js"
import teacherroute from "./routes/teacherroute.js"
import userRoute from "./routes/userRoute.js"
import classRoute from "./routes/classroute.js"

// database connect
connectDB();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to classroom</h1>")
})

app.use('/student', studentRoute)
app.use('/trainer', teacherroute)
app.use('/new', userRoute)
app.use('/class', classRoute)

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})
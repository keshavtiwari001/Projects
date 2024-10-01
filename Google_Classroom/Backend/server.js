import express from "express"
import colors from "colors"
import dotenv from "dotenv"
const PORT = process.env.PORT || 7000
const app = express()
dotenv.config()
app.use(express.json())

import connectDB from './config/db.js'
import studentRoute from "./routes/studentRoute.js"
import teacherroute from "./routes/teacherroute.js"
import userRoute from "./routes/userRoute.js"

// database connect
connectDB();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to classroom</h1>")
})

app.use('/student', studentRoute)
app.use('/teacher', teacherroute)
app.use('/new', userRoute)

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})
const express = require("express")
const authRoutes = require("./routes/auth.route")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())   // middle ware
// app.use(cookieParser())


app.use('/auth',authRoutes)


module.exports = app
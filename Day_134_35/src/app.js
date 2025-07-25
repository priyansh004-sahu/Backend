const express = require("express");
const authRoutes = require("./routes/auth.routes")
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json()); //miideware
app.use(cookieParser());

/* 
Post /auth/register
Post /auth/login
get /auth/user
get /auth/logout
*/
app.use('/auth', authRoutes);
// app.use('/product', ProductRoutes);
// app.use('/Customer', CustomerRoutes);
module.exports = app;
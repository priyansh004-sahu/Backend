const express = require("express");
const indexRoutes = require("./routes/index.routes")
const app = express();


// middleware is implement b/w apP and ROUTER
app.use((req, res, next)=> {
    console.log("THIS middleware is b/w app and route");
    next()
    
})
app.use("/", indexRoutes);

module.exports = app;
const express = require('express');


const app = express();  // server create

app.get('/home', (req, res)=> {
    res.send("Welcome to the home page")
})
app.get('/about', (req, res)=> {
    res.end("Welcome to the About Page")
})
app.listen(3000, ()=> {
    console.log("server is running on port 3000");
    
})

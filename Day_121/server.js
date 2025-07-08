
const express = require('express');
const connectToDB = require('./src/db/db')

// server database se connect => server.js
connectToDB();        // call the function


const app = express();   // create
app.use(express.json());   //  middleware destructre req.body
//post
app.post('/notes', (req, res)=> {
      const {title, content} = req.body;
    console.log(req.body);
})

// get
app.get('/', (req, res)=> {
    res.send('Helloo World')
});

app.listen(3000, ()=> {
    console.log('Server is Running on port 3000');
    
})
const http = require('http')


const server = http.createServer((req, res)=> {  //response from the server
    res.end("hello world from the server")
});  // server create hoga ha

server.listen(3000, () => {          // start
    console.log("Server is running on port 3000");   
});


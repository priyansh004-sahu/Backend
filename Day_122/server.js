const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

const app = express();
app.use(express.json())


app.post("/notes", async (req, res)=> {
    const {title, content} = req.body;

    console.log(title, content);
   await noteModel.create({
        title, content
    })
    res.json({
        messsage: "Note Created sucessfully"
    })
})


app.get("/notes", async (req, res)=> {
    
    const notes  = await noteModel.find();
    res.json({
        message: "Notes fetch sucessfully",
        notes
    })
})

app.delete("/notes/:id", async (req, res)=> {

    const noteId = req.params.id;

    await noteModel.findOneAndDelete({
        _id : noteId
    })
    res.json({
        message: "Note Deleted"
    })
})


app.patch("/notes/:id", async (req, res)=> {

    const noteId = req.params.id;
    const {title} = req.body;
    await noteModel.findOneAndUpdate({
       _id: noteId
    }, {
        title: title
    })

    res.json({
        message:  "Notes Updated"   
    })
})

connectToDB();     // server  connected to database
app.listen(3000, ()=> {
    console.log("server is running on port 3000");
    
})

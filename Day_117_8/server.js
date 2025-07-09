
const express = require('express');

const app = express();

app.use(express.json());  // give actual data for req.body   middle

// create api post method ==> { title and description }
let notes = [];
app.post("/notes", (req,res)=> {   // api
   console.log(req.body);
   notes.push(req.body);
   res.json({
    message: "Note added successfully",
    notes: notes
   })
})

// come from server
app.get("/notes", (req, res)=> {
    res.json(notes);
})

/*DELETE / notes / index: 0/1/2 */

app.delete("/notes/:index", (req, res)=> {
    const index = req.params.index;
    delete notes[index];

    res.json({
        message: "note deleted successfully",
        notes: notes
    })
})

/*PATCH  /notes/:index => {title}changing value */

app.patch("/notes/:index", (req, res)=> {
    const index = req.params.index;
    const {title} = req.body;

    notes[index].title = title;
    res.json({
        message: "notes updated successfully"
    })
})

app.listen(3000,()=> {
    console.log("server is running on port 3000");
    
})
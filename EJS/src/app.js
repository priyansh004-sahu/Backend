import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'));

app.set("view engine", "ejs")

app.post("/api/auth/register", (req, res) => {
    res.status(201).send({message: "User registered successfully"});
})

app.get("/", (req, res) => {
    res.render("index", {
        message: [
            "Hello from ejs",
            "lorem2333333",
            "rahul ff",
            "lorem4555",
            "lorem895",
        ],
        html: [
           ` <h1> Hello world </h1>`,
            `<h2> this is sample HTml snippet </h2>`,
            '<p> this is paragraph</p>',
          `  <button> clieck me </button>`
        ]
    });
});

export default app;
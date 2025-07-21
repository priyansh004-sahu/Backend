const express = require("express");
const router = express.Router();


// middleware is implement b/w router and API
router.use((req, res, next)=>{
    console.log("middleware is implement b/w router and API");
    next();
})

router.get("/", (req, res)=> {

    res.json({
        message:"WElcome to the cohort",

    })
})

module.exports = router;
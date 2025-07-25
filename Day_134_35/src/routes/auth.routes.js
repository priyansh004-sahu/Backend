const express = require("express");
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken");

const router = express.Router();

/* 
POST / register
POST / login
GET / USer
GET / logout
*/

// Create Register in the Database
router.post("/register", async (req, res)=> {
    const { username, password } = req.body;

    const user = await userModel.create({
        username,
        password
    });

    const token = jwt.sign({
        id:user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "user registered sucessfully",
        user,
    });
});


// Login API=> check the user are exist in database
router.post("/login", async (req, res)=> {
    const {username, password} = req.body;

    const isUser = await userModel.findOne({
        username:username
    })

    if(!isUser) {
        return res.status(401).json({
            message:"user account not found [Inavalid use]"
        })
    }
    

    const isPasswordValid = password == isUser.password  // check from database
    if(!isPasswordValid) {
        return res.status(401).json({
            message :"Invalid Password"
        })
    }
  

     res.status(200).json({
        message :"User logged in successfully"
    })
    

})


router.get("/user", async (req, res)=>{
    const {token} = req.cookies;

    if(!token) {
        return res.status(401).json({
            message:"unauthorized"
        })
    }
   try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET)  // token is correct or not

      const user = await userModel.findOne({
         _id:decoded.id
      }).select("-password")   // remove any data from frontend => .lean();

      res.status(201).json({
        message:"user data fetched sucessfully",
        user
      })
    }catch(err) {
      return res.status(401).json({
        message:"unauthorized- Invalid token"
      })
   }
})

module.exports = router;
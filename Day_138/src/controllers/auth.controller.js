const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");




async function registerController(req, res) {
    const {username, password} = req.body;

    isUserAlreadyExists = await userModel.findOne({username});

    if(isUserAlreadyExists) {
        return res.status(400).json({
            message: "User Already Exists"
        });
    }

    const user = await userModel.create({
        username,
        password
    });

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    res.cookie("token", token)

    return res.status(201).json({
        message: "User registered successfully",
        user
    });
}

async function loginController(req, res) {
    const {username, password} = req.body;

}

module.exports ={
    registerController,
    loginController
};
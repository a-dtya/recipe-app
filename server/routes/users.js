const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const UserModel = require("../models/Usermodel")
const userRouter = express.Router()


userRouter.post("/register",async(req,res)=>{
    const {username,password} = req.body
    const user = await UserModel.findOne({username: username})
    if(user){
        return res.json({message: "User already exists "})
    }
    const hashedPass = await bcrypt.hash(password,10)
    const newUser = new UserModel({username: username, password: hashedPass})
    await newUser.save()
    res.json({message: "User registered successfully"})
})
userRouter.post("/login",async(req,res)=>{
    const {username,password} = req.body
    const user = await UserModel.findOne({username: username})
    if(!user){
        return res.json({message: "User does not exist"})
    }
    const isPassValid = await bcrypt.compare(password,user.password)
    if(!isPassValid){
        return res.json({message: "The password entered is invalid"})
    }
    const token = jwt.sign({id:user._id},"secret")
    res.json({token: token, userID: user._id})
})
const verifyToken = (req,res,next)=>{
    
}

module.exports = userRouter
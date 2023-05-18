const express = require("express")
const mongoose = require("mongoose")
const RecipeModel = require("../models/RecipeModel")
const UserModel = require("../models/Usermodel")
const recipeRouter = express.Router()

recipeRouter.get("/",async(req,res)=>{
    try {
        const response = await RecipeModel.find({})
        res.json(response)
    } catch (error) {
        res.json(error)
    }
})
recipeRouter.post("/",async(req,res)=>{
    const recipe = new RecipeModel(req.body)

    try {
        const response = await recipe.save()
        res.json(response)
    } catch (error) {
        res.json(error)
    }
})
recipeRouter.put("/",async(req,res)=>{
    
    try {
        const recipe = await RecipeModel.findById(req.body.recipeID)
        const user = await UserModel.findById(req.body.userID)
        user.savedRecipes.push(req.body.recipeID)
        await user.save()
        res.json({savedRecipes: user.savedRecipes})
    } catch (error) {
        res.json(error)
    }
})
recipeRouter.get("/savedRecipes/ids/:userID",async(req,res)=>{
    try {
        const user = await UserModel.findById(req.params.userID)
        res.json({savedRecipes: user.savedRecipes})
    } catch (error) {
        res.json(error)
    }
})
recipeRouter.get("/savedRecipes",async(req,res)=>{
    try {
        const user = await UserModel.findById(req.body.userID)
        const savedRecipes = await RecipeModel.find({
            _id: {$in: user.savedRecipes},
        })
        res.json({savedRecipes})
    } catch (error) {
        
    }
})
module.exports = recipeRouter
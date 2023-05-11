const mongoose = require("mongoose")
const RecipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    ingredients: [{
        type:String,
        required: true
    }],
    instructions: {
        type:String,
        required: true
    },
    imageURL: {
        type:String,
        required :true
    },
    cookingTime:{
        type:Number,
        required: true
    },
    recipeOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
}) 

const RecipeModel = mongoose.model("recipedatas",RecipeModel)
module.exports = RecipeModel

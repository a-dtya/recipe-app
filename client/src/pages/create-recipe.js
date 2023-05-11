import React,{useState} from 'react'
import "./recipe.css"
function CreateRecipe () {
    const [recipe,setRecipe]=useState({
        name:"",
        instructions:"",
        imageURL:"",
        cookingTime:0,
        recipeOwner:"",
    })
    const handleSubmit = (e)=>{
        setRecipe({...recipe, [e.target.name]:e.target.value})
    }
  return (
    <>
    <div className='form'>
        <form className='formdata'>
        <h3>Create Recipe</h3>
        <label for="name">Name:</label>
    <input type="text" id="name" name="name" value={recipe.name} onChange={handleSubmit} required/>

    <label for="ingredient">Ingredient:</label>
    <input type="text" id="ingredient" name="ingredient" required/>

    <label for="instructions">Instructions:</label>
    <textarea id="instructions" name="instructions" rows="10" cols="50" value={recipe.instructions} onChange={handleSubmit} required></textarea>

  <label for="imageURL">Image URL:</label>
  <input type="text" id="imageURL" name="imageURL" value={recipe.imageURL} onChange={handleSubmit} required/>

  <label for="cookingTime">Cooking Time:</label>
  <input type="number" id="cookingTime" name="cookingTime" value={recipe.cookingTime} onChange={handleSubmit} required/>

  <input type="submit" value="Submit"/>
</form>

    </div>
    </>
  )
}

export default CreateRecipe
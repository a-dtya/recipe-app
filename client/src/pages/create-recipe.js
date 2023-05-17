import React,{useState} from 'react'
import "./recipe.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function CreateRecipe () {
    const userID = window.localStorage.getItem("userID")
    const navigate = useNavigate()
    const [recipe,setRecipe]=useState({
        name:"",
        ingredient:[],
        instructions:"",
        imageURL:"",
        cookingTime:0,
        recipeOwner:userID,
    })
    const handleSubmit = (e)=>{
        setRecipe({...recipe, [e.target.name]:e.target.value})
    }
    const [ingredient,setIngredient] = useState([])
    const [val,setVal]=useState("")
    const handleClick=(e)=>{
      e.preventDefault()
      setIngredient(prevList=>[...prevList,val])
      setRecipe({...recipe,ingredient:ingredient})
      setVal("")
    }
    const handleForm = async(e)=>{
      e.preventDefault()
      try {
        await axios.post("http://localhost:3001/recipe",recipe)
        alert('recipe created')
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
    <div className='form'>
        <form className='formdata' onSubmit={handleForm}>
        <h3>Create Recipe</h3>
        <label for="name">Name:</label>
    <input type="text" id="name" name="name" value={recipe.name} onChange={handleSubmit} required/>

    <label for="ingredient">Ingredient:</label>
    <input type="text" id="ingredient" name="ingredient" value={recipe.ingredient} onChange={(e)=>setVal(e.target.value)} required/>
    <div className='btncontainer'><button className='ingredientstore' type='button' onClick={handleClick}>Submit</button></div>

      <div className='ingredients'>
      {ingredient.map(e=>{
        return <li key={e}>{e}</li>
      })}
      </div>

    <label for="instructions">Instructions:</label>
    
    <textarea id="instructions" name="instructions" rows="5" cols="50" value={recipe.instructions} onChange={handleSubmit} required></textarea>

  <label for="imageURL">Image URL:</label>
  <input type="text" id="imageURL" name="imageURL" value={recipe.imageURL} onChange={handleSubmit} required/>

  <label for="cookingTime">Cooking Time:</label>
  <input type="number" id="cookingTime" name="cookingTime" value={recipe.cookingTime} onChange={handleSubmit} required/>

  <input type="submit" />
</form>

    </div>
    </>
  )
}

export default CreateRecipe
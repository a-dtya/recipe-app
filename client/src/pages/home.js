import React,{useEffect, useState} from 'react'
import axios from 'axios'
function Home() {
    const [recipe,setRecipe]=useState([])
    const [savedrecipes,setSavedRecipes]=useState([])
    useEffect(()=>{
        const fetchRecipe = async()=>{
            try {
                const response = await axios.get("http://localhost:3001/recipe")
                setRecipe(response.data)
            } catch (error) {
                console.log(error)
            }
            
        }
        const fetchSavedRecipes = async()=>{
            try {
                const userID = window.localStorage.getItem("userID")
                const response = await axios.get("http://localhost:3001/recipe/savedRecipes/ids",{userID})
                setSavedRecipes(response.data)
            } catch (error) {
                
            }
        }
        fetchRecipe()
    },[])
    const saveRecipe = async(recipeID)=>{
         
        try {
            const userID = window.localStorage.getItem("userID")
            const response = await axios.put("http://localhost:3001/recipe",{recipeID,userID})
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <div className='home-parent'>
            <h1 className='home-title'>Recipes</h1>
            <div className='home-list'>
                <ul>
                    {
                        recipe.map((r)=>{
                            return(
                                <div className='list-item'>
                                <li key={r._id}>
                                    <div>
                                        <h4>{r.name}</h4>
                                    </div>
                                    <div>
                                        <p>{r.instructions}</p>
                                    </div>
                                    <div>
                                        <button onClick={()=>saveRecipe(r._id)}>Save</button>
                                    </div>
                                </li>
                            </div>
                            )
                            
                        })
                    }
                </ul>
            </div>
        </div>
    </>
  )
}

export default Home
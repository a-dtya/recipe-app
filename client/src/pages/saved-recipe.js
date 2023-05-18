import React,{useState,useEffect} from 'react'
import axios from 'axios'
function SavedRecipes () {
    const [savedrecipes,setSavedRecipes]=useState([])
    useEffect(()=>{
        
        const fetchSavedRecipes = async()=>{
            try {
                const userID = window.localStorage.getItem("userID")
                const response = await axios.get(`http://localhost:3001/recipe/savedRecipes/${userID}`)
                setSavedRecipes(response.data.savedRecipes)
            } catch (error) {
                
            }
        }
        
        fetchSavedRecipes()
    },[])
    
  return (
    <>
    <div className='home-parent'>
        <h1 className='home-title'>Recipes</h1>
        <div className='home-list'>
            <ul>
                {
                    savedrecipes.map((r)=>{
                        return(
                            <div className='list-item'>
                            <li key={r._id}>
                               
                                <div>
                                    <h4>{r.name}</h4>
                                </div>
                                <div>
                                    <p>{r.instructions}</p>
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

export default SavedRecipes
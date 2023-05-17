import React,{useEffect, useState} from 'react'
import axios from 'axios'
function Home() {
    const [recipe,setRecipe]=useState([])
    useEffect(()=>{
        const fetchRecipe = async()=>{
            try {
                const response = await axios.get("http://localhost:3001/recipe")
                setRecipe(response.data)
            } catch (error) {
                console.log(error)
            }
            
        }
    },[])
  return (
    <>

    </>
  )
}

export default Home
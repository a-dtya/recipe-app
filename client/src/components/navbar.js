import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"
import { useCookies } from 'react-cookie'
import {useNavigate} from "react-router-dom"
function Navbar() {
    const [cookie,setCookie]=useCookies(["access_token"])
    const navigate = useNavigate("")
    function logout(){
        setCookie("access_token","")
        window.localStorage.removeItem("userID")
        navigate("/auth")
    }
  return (
    <div className='navbar'>
        <Link to="/" className='home'>Home</Link>
        
        <Link to="/create" className='create'>Create</Link>
        <Link to="/saved" className='saved'>Show Saved</Link>
        {!cookie.access_token ? (<Link to="/auth" className='login'>Log in/Register</Link>) : 
            (<button onClick={logout}>Logout</button>)
        }
        
    </div>
  )
}

export default Navbar
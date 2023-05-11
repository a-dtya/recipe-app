import React,{useState} from 'react'
import "./auth.css"
import axios from 'axios'
import {useCookies} from "react-cookie"
import {useNavigate} from "react-router-dom"
function Auth() {
  return (
    <div className='authbody'>
        <Login/>
        <Register/>
    </div>
  )
}

export default Auth

function Login(){
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [_,setCookie] = useCookies(["access_token"])//we put _ as we don't want to access cookie
    const navigate = useNavigate()
    const onSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3001/auth/login",{
                username,
                password
            }) // returns the token as response, now store the token in a cookie
            setCookie("access_token",response.data.token) // here access_token is the name of the cookie,
            //2nd argument is the data to be stored, as response has {token,userID}
            window.localStorage.setItem("userID",response.data.userID) //to store userid to localStorage for easy access
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div class="container">
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required  value={username} onChange={(e)=>setUserName(e.target.value)}/>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <input type="submit" onSubmit={onSubmit}/>
        </form>
      </div>
    </div>
    )
}
function Register(){
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const onSubmit = async(e)=>{
        e.preventDefault() //to avoid refreshing the page after submit
        try {
            await axios.post("http://localhost:3001/auth/register",{
                username,
                password
            })
            alert(`Welcome aboard {username}! Now Login`)
        } catch (error) {
            console.log(error)
        }

    }
    return(
        <div class="container">
      <div class="login-box">
        <h2>Register</h2>
        <form>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required  value={username} onChange={(e)=>setUserName(e.target.value)}/>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <input type="submit" onSubmit={onSubmit} />
        </form>
      </div>
    </div>
    )
}
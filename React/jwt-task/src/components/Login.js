import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login=()=>{
    const [loginData, setloginData]=useState({
        email:"",
        password:""
    })
    const [fetchLogin,setfetchLogin]=useState([])
    const navigate = useNavigate()

    const fetchdata=async()=>{
        try{
           const response =  await axios.get("http://localhost:3001/Admin")
           setfetchLogin(response.data)
        }
        catch(err){
              console.log(err)
        }
    }
    useEffect(()=>{
        fetchdata()
    },[])
    const handleChange=(e)=>{
           setloginData({...loginData,[e.target.name]:e.target.value})
    }


    const handleClick=()=>{
        if(fetchLogin.email == loginData.email && fetchLogin.password == loginData.password){
            navigate('/Home')
        }
        else{
            alert("invalid credientials")
        } 
    }
    return(
        <>
        <div>
            <input type="text" placeholder="email" name="email" value={loginData.email} onChange={handleChange}/><br/>
            <input type="text" placeholder="password" name="password" value={loginData.password} onChange={handleChange}/><br/>
            <button onClick={handleClick}>Login</button>
        </div>
        </>
    )
}
export default Login
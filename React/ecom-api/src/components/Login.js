import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Products from "./Products"

const Login=()=>{
    const nav=useNavigate()
    const [loginData,setloginData]=useState({
        username:"johnd",
        password:"m38rmF$"
    })
    const [Token,setToken]=useState("")
    const [Loading,setLoading]=useState(false)
    const handleInputChange=(e)=>{
        setloginData({...loginData,[e.target.name]:e.target.value})
        
        

    }
    const handleLogin= async ()=>{
        console.log(loginData)
        setLoading(true)
        try{
        const fetchData= await axios.post("https://fakestoreapi.com/auth/login",{
            username:loginData.username,
            password:loginData.password
        }
        )
        // console.log(fetchData.data,"kk")
        const Tokendata=fetchData.data.token
        setToken(Tokendata)
        console.log(Token)
        if(Tokendata){
               nav('Products')
        }
        else{
            alert("Credential doesn't match")
        }
    }
    catch(err){
        console.log(err,Error)
    }
    finally{
        setLoading(false)
    }
    }
   

    return(
        <>
       <div>
       <input type="text" value={loginData.username} name="username" onChange={handleInputChange}/>
       </div> 
       <div>
       <input type="text" value={loginData.password} name="password" onChange={handleInputChange}/>
        </div> 
        <div>
        <button onClick={handleLogin}>
                Submit
                
        </button>
        {Loading && 
                <p>Loading...</p> }
            </div>
        </>
    )
}
export default Login
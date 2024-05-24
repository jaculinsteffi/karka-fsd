import { useEffect, useState } from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"


const Login = () => {
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    // const [token, setToken] = useState("")

    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }
   
    
    const navigation=useNavigate()
   



    async function LoginData() {
        try {

            const response = await axios.post("https://reqres.in/api/login", value)
          if(response.data.token){
               localStorage.setItem("token",response.data.token)
                // console.log(token)
                if(localStorage.getItem("token")){
                    navigation('List')
                }
          }
          
        }
        catch (error) {
            console.log("error reading:", error)
            
        }
    }
     
    const handleClick = () => {
        LoginData()
        
    }
   
    return (
        <>
            <input type="text" value={value.email} name="email" onChange={handleChange} />
            <input type="text" value={value.password} name="password" onChange={handleChange} />
            <button onClick={handleClick}>submit</button>
        </>
    )
}
export default Login
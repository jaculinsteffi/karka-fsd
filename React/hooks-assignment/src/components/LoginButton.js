import { useState } from "react"

const LoginButton=()=>{
    const [Login,setLogin]=useState(false)
    const handleClick=()=>{
        setLogin(true)
    }
    return(
        <>
        <button onClick={handleClick}>{Login ? "Logout" : "Login"}</button>
        {Login? <p>Login Your Account</p> : <></>}

        </>
    )
}
export default LoginButton
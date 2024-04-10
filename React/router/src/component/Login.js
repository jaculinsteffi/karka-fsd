import {useNavigate} from 'react-router-dom'
const Login=()=>{
    const navigation=useNavigate()
    const handleClick=()=>{
        navigation('Register')
    }
    return(
        <>
        Login
        <button onClick={handleClick}>Register</button>
        </>
    )
}
export default Login
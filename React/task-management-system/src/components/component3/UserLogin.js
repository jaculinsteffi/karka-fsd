import React, { useState } from 'react'
import{
    Form,
    Label,FormGroup,Input,Button
} from 'reactstrap'
import UserLoginCss from '../component3/UserLogin.css'
import { Link, useNavigate } from 'react-router-dom' 
import axios from 'axios'
import { useEffect } from 'react'

const UserLogin = () => {
  const navig=useNavigate()
  const [Loginuser,setLoginuser]=useState({
    Email:"",
    Password:""
  })
  const [regLogin,setregLogin]=useState([])
  const registerdata=async()=>{
    try{
        const registerresponse=await axios.get("http://localhost:3001/data")
        setregLogin(registerresponse.data)
        
        
    }
    catch(err){
        console.log(err)
    }
}
useEffect(()=>{
    registerdata()
    
})
const handleLoginUser=(e)=>{
  setLoginuser({...Loginuser,[e.target.name]:e.target.value})

}

// localStorage.setItem("key",JSON.stringify(newdata))
const handleUser=()=>{
  const newdata=regLogin.find(item=>item.Email===Loginuser.Email && item.Password===Loginuser.Password )
    if(newdata && Loginuser.Email!=="" && Loginuser.Password!==""){
     localStorage.setItem("currentUser",Loginuser.Email)
       navig('/UserHome')
    }
    else{
      alert("please fill the details or check the details")
    }
  }

  return (
    <div className='wallpaper'>
       <div className='User'>
  
  <Form>
    <legend style={{color : "white"}}>User Login</legend>
    <FormGroup floating>
      <Input 
        id="exampleEmail"
        name="Email"
        placeholder="Email"
        type="email"
        value={Loginuser.Email}
        onChange={handleLoginUser}
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="Password"
        placeholder="Password"
        type="password"
        value={Loginuser.Password}
        onChange={handleLoginUser}
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <Button className='userlogin' onClick={handleUser}>
      Login
    </Button>
    <p className='useror'>or</p>
    {' '}
    <Link to='/UserReg'><Button className='userreg'>
      Register
    </Button>
    </Link>
  </Form>
</div>
      
    </div>
  )
}

export default UserLogin

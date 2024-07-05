import React, { useState } from 'react'
import logo from "../assets/youtube-logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const nav=useNavigate()
    const [value,setValue]=useState({
      Name:"",
      Email:"",
      Password:"",
      Confirm:""
    })
    const handlechange=(e)=>{
      setValue({...value,[e.target.name]:e.target.value})

    }
    const handleRegister=()=>{
      if(value.Password===value.Confirm && value.Name!=="" && value.Password!==""){
              nav('/')
      }
        const newreg=async()=>{
          const newitem={
            ...value,
            Name:value.Name,
            Email:value.Email,
            Password:value.Password,
            Confirm:value.Confirm

          }
          try{
            const newreponse=await axios.post(`http://localhost:3001/logindata`,newitem)
            setValue(newreponse)
          }
          catch(err){
            console.log(err)
          }
        }
        newreg()
    }
  return (
    <div>
      <img alt="youtube" src={logo} className="login-logo" />
      <div className="login-body">
        <form>
          <h2>Register</h2>
          <input type="text" placeholder="Username" name='Name' value={value.Name} onChange={handlechange} required />
          <input type="email" placeholder="Enter Your Email" name='Email' value={value.Email} onChange={handlechange} required  />
          <input type="password" placeholder="Enter Your Password"  name='Password' value={value.Password} onChange={handlechange} required  />
          <input type="password" placeholder="Confirm Your Password" name='Confirm' value={value.Confirm} onChange={handlechange} required  />
          <button  onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register

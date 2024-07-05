import React, { useEffect, useState } from "react";
import logo from "../assets/youtube-logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const nav = useNavigate();
  const [loginuser,setloginuser]=useState({
    Email:"",
    Password:""
  })
  const[regdata,setregdata]=useState([])
  const registerdata=async()=>{
    try{
         const response=await axios.get("http://localhost:3001/logindata")
         setregdata(response.data)
    }
    catch(E){
      console.log(E)
    }
  }
  useEffect(()=>{
    registerdata()
  })
  const handleLogin = (e) => {
    setloginuser({...loginuser,[e.target.name]:e.target.value})
    
  };
  const handleSubmit=()=>{
    const newdata=regdata.find(item=>item.Email===loginuser.Email && item.Password ===loginuser.Password)
    if(newdata && loginuser.Email!=="" && loginuser.Password!==""){
      nav('/')
    }
  }
  const handleRegister = () => {
    nav("/register");
  };
  return (
    <div className="login" >
      
      <img alt="youtube" src={logo} className="login-logo"/>
      <div className="login-body">
        <form>
          <h2>Sign In</h2>
          <input type="text" placeholder="Enter Your Email" name="Email" value={loginuser.Email} onChange={handleLogin} />
          <input type="password" placeholder="Enter Your Password" name="Password" value={loginuser.Password} onChange={handleLogin} />
          <button onClick={handleSubmit}>Sign In</button>
          <button onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

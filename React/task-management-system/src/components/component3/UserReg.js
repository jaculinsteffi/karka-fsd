import React, { useEffect, useState } from 'react'
import '../component3/UserLogin.css'
import {  useNavigate } from 'react-router-dom'

import axios from 'axios'

const UserReg = () => {
    const navi=useNavigate()
    // const [regjsonData,setregjsonData]=useState([])
    const[Reg,setReg]=useState({
        Name:"",
        Email:"",
        Password:"",
        Confirm:""

    })
    const handleReg=(e)=>{
        setReg({...Reg,[e.target.name]:e.target.value})

    }
 
    const handleRegsubmit=()=>{
        if(Reg.Password===Reg.Confirm && Reg.Name!=="" && Reg.Email !=="" && Reg.Password!==""){
                navi('/UserLogin')
        }
        else{
            alert("Password doesn't match or please fill the details")
        }
        const newreg=async()=>{
            const newitem={
                ...Reg,
                Name:Reg.Name,
                Email:Reg.Email,
                Password:Reg.Password,
                Confirm:Reg.Confirm
            }
            try{
                const newResponse=await axios.post(`http://localhost:3001/data`,newitem)
                setReg(newResponse)
            } 
            catch(e){
                console.log(e)
            }
        }
        newreg()
        
    }
    // useEffect(()=>{
    //     handleRegsubmit()
    // })
    
  return (
    <div className='regusermain'>
    <div className='regusersection'>
        <legend>Register</legend>
    <div>
        <input placeholder='Enter Your Name' name='Name' value={Reg.Name} onChange={handleReg} required/>
    </div>
    <div>
        <input placeholder='Enter Your Email' name='Email' value={Reg.Email} onChange={handleReg} required/>
    </div>
    <div>
        <input placeholder='Set Password' name='Password' value={Reg.Password} onChange={handleReg} required/>
    </div>
    <div>
        <input placeholder='Confirm Password' name='Confirm' value={Reg.Confirm} onChange={handleReg} required/>
    </div>
    <button onClick={handleRegsubmit}>Submit</button>

  </div>
  </div>
  )
}

export default UserReg

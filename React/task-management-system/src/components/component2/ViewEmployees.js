import React, { useEffect, useState } from 'react'
import AdminHome from './AdminHome'
import axios from 'axios'
import './ViewEmployees.css'
import { IoSearch } from "react-icons/io5";


const ViewEmployees = () => {
  const [employ,setemploy]=useState([])
  const [searchemp,setsearchemp]=useState("")
  const [filteremp,setfilteremp]=useState([])

  const fetching=async()=>{
    try{
       const resp=await axios.get("http://localhost:3001/data")
       const data=resp.data
       setemploy(data)
       setfilteremp(data)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetching()
  },[])
  const handleremove=async(id)=>{
    try{
       const ans=await axios.delete(`http://localhost:3001/data/${id}`)
       setemploy(prevData=>prevData.filter(task=>task.id !==id))
       setfilteremp(prevData => prevData.filter(task => task.id !== id));
      
    }
    catch(err){
      console.log(err)
    }
  }
  const handlesearchemp=(e)=>{
    setsearchemp(e.target.value)
    const filteremploy=employ.filter(item=>item.Name.toLowerCase().includes(searchemp.toLowerCase())||
    item.Email.toLowerCase().includes(searchemp.toLowerCase())
  )
    setfilteremp(filteremploy)
  }
 
  return (
    <div>
  
      <AdminHome/>
        <div className='empsearch'>
          <input type='search' value={searchemp} placeholder='Search here' onChange={handlesearchemp}/>
          <IoSearch className='icon'/>
        </div>
        <div className='viewemployee'>
          <div className='viewemployeesection'>
            <table>
              <thead>
                <tr>
                <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  {/* <th>Phone No</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteremp.map((item,i)=>(
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td><button className='button2' onClick={()=>handleremove(item.id)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      
       
    </div>
  )
}

export default ViewEmployees

import React, { useEffect, useState } from 'react'
import AdminHome from './AdminHome'
import axios from 'axios'
import './ViewEmployees.css'
import { IoSearch } from "react-icons/io5";


const ViewEmployees = () => {
  const [employ,setemploy]=useState([])
  const [searchemp,setsearchemp]=useState("")
  const [filteremp,setfilteremp]=useState([])
  console.log(filteremp,'lll')

  const fetching=async()=>{
    try{
       const resp=await axios.get("http://localhost:3333/user/alluser")
       const data=resp.data
       console.log(data)
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


const handleremove = async (_id) => {
  console.log(_id);
  try {
    const response = await axios.post(`http://localhost:3333/user/delete`, { _id });

    console.log(response.data); 
    fetching()
  } catch (err) {
    console.error("Error:", err);
  }
};



  const handlesearchemp=(e)=>{
    const value=e.target.value
    setsearchemp(value)
    if(value===''){
      setfilteremp(employ)
    }
    else{
      const filteremploy=employ.filter(item=>item.email.toLowerCase().includes(value.toLowerCase())
  )
    setfilteremp(filteremploy)

    }
    
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
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><button className='button2' onClick={()=>handleremove(item._id)}>Remove</button></td>
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

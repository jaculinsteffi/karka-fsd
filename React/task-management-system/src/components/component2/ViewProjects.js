import React, { useContext, useEffect, useState } from 'react'
import AdminHome from './AdminHome'
import axios from 'axios'
import { format } from 'date-fns'
import { IoSearch } from "react-icons/io5";
import './ViewEmployees.css'



const ViewProjects = () => {
 
  
 
  const [GetData,setGetData]=useState([])
  const [search,setsearch]=useState('')
  const [filterdata,setfilterdata]=useState([])
  

  const get =async()=>{
    try{
      const res=await axios.get("http://localhost:3333/task/all")
      console.log(res.data)
      setGetData(res.data)
      setfilterdata(res.data)
      
    }
    catch(err){
      console.log(err)
    }
    
  }
  useEffect(()=>{
    get()

  },[])
  const date=new Date()
  const formatdate=format(date,'yyyy-MM-dd')
  const handlesearch=(event)=>{
    const value=event.target.value
          setsearch(value)
          if(value===""){
            setfilterdata(GetData)
          }
          else{
            const filter= GetData.filter(item=>item.projectname.toLowerCase().includes(value.toLowerCase()) ||
            item.projectemail.toLowerCase().includes(value.toLowerCase())
          
          )
          setfilterdata(filter)
          }
        
}


return (
    <div>
      
          
      <AdminHome/>
      <div className='viewsearch'>
          <input type='text' placeholder='Search here' value={search} onChange={handlesearch}/>
          <IoSearch className='icon'/>
        </div>
      <div className='viewpro'>
        
        <div className='viewprosection'>
          <table border={1}>
            <thead>
              <tr>
                         
                <th>Project Name</th>
                <th>Email</th>
                <th>Project Description</th>
                <th>Project Requirement</th>
                <th>Project Assign Date</th>
                <th>Project Deadline date</th>
                <th>Project Status</th>
                
              </tr>
            </thead>
            <tbody>
                <>
                {filterdata.map((item,i)=>(
                <tr><td>{item.projectname}</td>
                <td>{item.projectemail}</td>
                <td>{item.projectdescription}</td>
                <td>{item.projectrequirement}</td>
                <td>{formatdate}</td> 
                <td>{item.projectdeadline}</td>
                <td><button>{item.projectstatus}</button></td>
               
                </tr>
                 
              ))}
              </>
            </tbody>
          </table>
        </div>

      </div>
     
    </div>
  )
}

export default ViewProjects

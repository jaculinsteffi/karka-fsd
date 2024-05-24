import React, { useEffect, useState } from "react";

const Api=()=>{
const [data,setData]=useState([])
// console.log(data)
    async function readItem(){
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/todos")
            if(!response.ok){
                
                throw new Error(`failed to load ${response.status}`)
            }
            const value=await response.json()
            setData(value)
           console.log(value)
        }
        catch (error){
            console.error("error reading menu ",error)
    }
    
    }
    useEffect(()=>{
        readItem()
    },[])
    return(
        <>
        <table className="table" border={1}>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
               {data.map((da,index)=>(
                da.completed === true && da.userId === 2 ?(
                <tr key={index}>
                    <td>{da.userId}</td>
                    <td>{da.id}</td>
                    <td>{da.title}</td>
                    <td>{da.completed ? "Yes": "No"}</td>
                </tr>
                ):""
                
               ))}
            </tbody>
        </table>
            
        </>

    )
    
}
export default Api
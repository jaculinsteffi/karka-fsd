import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewList = () => {
    const [data,setdata]=useState([])
    const [edit,setedit]=useState(null)
    const [title,settitle]=useState("")
    const [complete,setcomplete]=useState(false)
    const [add,setadd]=useState({
        id:"",
        title:"",
        completed:false
    })
    console.log(data)
    const datafetch=async()=>{
        try{
            const res=await axios.get("http://localhost:3001/tasks")
            const resdata= res.data
            setdata(resdata)
        }
        catch(err){
            console.log(err)
        }
     }
     useEffect(()=>{
        datafetch()
     },[])
     const handleEdit=(item)=>{
        setedit(item)
        settitle(item.title)
        setcomplete(item.setcomplete)

     }
     const handleDelete=async(id)=>{
        try{
            await axios.delete(`http://localhost:3001/tasks/${id}`)
            setdata(prevData=>prevData.filter(task=>task.id !== id))
        }
        catch(err){
            console.log(err)
        }

     }
     const handleUpdate=async()=>{
        try{
            const updated={
                ...edit,
                title: title,
                completed:complete
            }
            console.log(updated,"uu")
             await axios.put(`http://localhost:3001/tasks/${edit.id}`, updated)
            setdata(prevData=>prevData.map(task=>(task.id)===edit.id ? updated : task))
            setedit(null)
            settitle("")
            setcomplete(false)
        }
        catch(error){
            console.log(error)
         }
 
     }
     
     const handleAdd=async()=>{
        try{
            const AddedItem={
                ...add,
                id:add.id,
                title:add.title,
                completed:add.completed
            }
            await axios.post(`http://localhost:3001/tasks`,AddedItem)
            datafetch()
            setadd({
                id:"",
                title:"",  
                completed:false
            })
                        }
                        catch(err){
                            console.log(err)
                        }

     }
  return (
    <div>
        <h3>JSON Task</h3>
        <div>
            <label>Id</label>
            <input type='text' value={add.id} onChange={(e)=>setadd({...add,id:e.target.value})}/>
            <label>Title</label>
            <input type='text' value={add.title} onChange={(e)=>setadd({...add,title:e.target.value})}/><br/>
            <label>Completed</label>
            <input type='checkbox' checked={add.completed} onChange={(e)=>setadd({...add,completed:e.target.checked})}/><br/>
            <button onClick={handleAdd}>ADD</button>

            

        </div><br/>
        <table border={1}>
            <thead>
                <tr> 
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,i)=>(
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ? "yes" : "No"}</td>
                        <td><button onClick={()=>handleEdit(item)}>Edit</button></td>
                        <td><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        {edit && (
            <div>
                <h2>Edit Task</h2>
                <label>Title:</label>
                <input type='text' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
                <label>Completed:</label>
                <input type='checkbox' checked={complete} onChange={(e)=>{setcomplete(e.target.checked)}}/>
                <button onClick={handleUpdate}>Update</button>
            </div>
        )}
      
    </div>
  )
}

export default NewList

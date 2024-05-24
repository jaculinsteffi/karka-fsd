import { useState } from "react"

const Userdetails=()=>{
    const [data,setdata]=useState({
        username:"",
        password:""
    })
    const [edit,setedit]=useState("")
    const handleChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
        // setitem([...item,data])
         console.log(data)
    }
    const handleEdit=(i)=>{
        setedit(edit)
        setdata(data)

    }
    return(
        <>
        <input type="text" value={data.username} name="username" placeholder="username" onChange={handleChange}/><br/>
        <input type="text" value={data.password} name="password" placeholder="password" onChange={handleChange}/><br/>
        <img src="" alt="avatar"/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={()=>{handleEdit()}}>Edit</button>
        
        </> 
    )
}
export default Userdetails
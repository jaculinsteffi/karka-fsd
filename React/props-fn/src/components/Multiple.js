import { useState } from "react";
const Multiple=()=>{
    const [data,setdata]=useState({
        name:"",
        password:""

    })
    const handleChange=(e)=>{
        setdata({
            ...data,[e.target.name]:[e.target.value]
        })
    }
    const handleClick=()=>{ 
        console.log(data)
    }
    return(
        <>
        <input type="text" value={data.name} name="name" onChange={handleChange}/>
        <input type="text" value={data.password} name="password" onChange={handleChange}/>
        <button onClick={handleClick}>ok</button>
        </>
    )
}
export default Multiple
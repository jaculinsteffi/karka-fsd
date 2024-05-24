import { useState } from "react"

const CountChar=()=>{
    const [Count,setCount]=useState(0)
    const handleChange=()=>{
   setCount(Count+1)
    }
    return(
        <>
        <textarea onChange={handleChange}></textarea>
        <p>{Count+1}</p>
        </>
    )
}
export default CountChar
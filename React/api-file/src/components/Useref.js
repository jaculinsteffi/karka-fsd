import { useEffect, useRef, useState } from "react"

const Counter=()=>{
    const[inputvalue,setinputvaloue]=useState(" ")
    const count=useRef(0)
    useEffect(()=>{
        count.current=count.current+1
    })
    return(
        <>
        <input type="numb" value={inputvalue} onChange={((e)=>setinputvaloue(e.target.value))}/>
        <h1>Render count:{count.current}</h1>
        </>
    )
}
export default Counter
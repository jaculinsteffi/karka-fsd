import { useEffect, useState } from "react"

const Counter=()=>{
    const [count,setcount]=useState(0)
    const handleCount=()=>{
        setcount(count + 1)
    }
    useEffect(()=>{
        console.log(`count change to ${count} times`)
    },[count])
    return(
        <>
        <p>You Clicked {count} times</p>
        <button onClick={handleCount} style={{backgroundColor:count%2===0 ? "lightgreen":"yellow"}}>Click</button>
        </>
    )
}
export default Counter
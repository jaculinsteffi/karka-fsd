import {useState} from 'react'
const button=({clk})=>{
    // const add=()=>{
        
    //   }
    const [Count,SetCount]=useState(0)
     
      const handleIncrement=()=>{
        SetCount(Count+1)
        console.log(Count)
      } 
      const handleDecrement=()=>{
        SetCount(Count-1)
        console.log(Count)
      }
    return(
        <>
        {/* <button onClick={clk}>add</button> */}
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <p>{Count}</p>
        </>
    )
}
export default button
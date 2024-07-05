import React, { useState } from 'react'

const Task = () => {
    const[count,setcount]=useState(0)
    const [data,setdata]=useState("")
    const handleChange=(e)=>{
        
        setdata(e.target.value)
        setcount(count+1)

    }
  return (
    <div>
      <textarea typeof='text' value={data} onChange={handleChange}>
            
      </textarea>
      <p>{count}</p>
    </div>
  )
}

export default Task

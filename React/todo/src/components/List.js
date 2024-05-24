import { useState } from "react"

const Form=()=>{
    const [data,setdata]=useState('')
    const [value,setvalue]=useState([])
    const handleChange=(event)=>{
        setdata(event.target.value)

    }
    const handleClick=()=>{
        setdata("")
        setvalue([...value,data])
        
        

    }
    return(
        <>
        <div className="box">
        <input type="text" onChange={handleChange} value={data} className="input" />
        <button onClick={handleClick} className="button">Add</button>
        </div>
        <ul>
        {value.map((value,index)=>(
            
                <li>
                {value}
                </li>
               
           
    
      )  )}
      </ul>
        
    
      
        </>
    )
}
export default Form
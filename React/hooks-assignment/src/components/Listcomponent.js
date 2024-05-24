import { useState } from "react"

const Listcomponent=()=>{
    const [data,setdata]=useState("")
    const [item,setitem]=useState([])
    const handleChange=(e)=>{
        setdata(e.target.value)
    }
    const handleClick=()=>{
        
        setitem([...item,data ])
        setdata("")

    }
    return(
        <>
        <input type="text" value={data} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        
            <ul>
            {item.map((items,i)=>(
            <li key={i} >
                {items}
            </li>
      

        ))}
          </ul>
    
             

       
        
        </>
    )
}
export default Listcomponent
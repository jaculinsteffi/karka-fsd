import { useState } from "react"

const Shopping=()=>{
    const[data,setdata]=useState("")
    const [item,setitem]=useState([])
    const handleChange=(e)=>{
        setdata(e.target.value)
    }
    const handleClick=()=>{
        setdata("")
        setitem([...item,data])

    }
    const handleDelete=(i)=>{
        const update = [...item]
        update.splice(i,1)
        setitem(update)

    }
    return(
        <>
        <div className="main">
           <div>
           <h2>Project 4: Shopping List</h2>
           </div>
           <div className="box">
            <h3>Items To Buy</h3>
            <input type="text" value={data} onChange={handleChange}
            required
            />
            <button onClick={handleClick}>Add</button>
            <ul>
            {item.map((value,i)=>(
             <div className="steffi">
                <div>
                <li>
                    {value}
                    
                </li>
                </div>
                <div>
                <button onClick={()=>{handleDelete(i)}} className="delete">X</button>
                </div>
            </div>
                
            ))}
           </ul>
           </div>
          

        </div>
        </>
    )
}
export default Shopping
import { useState } from "react"

const Buttontoggle =()=>{
    const [data,setdata]=useState(false)
    const handleChange =()=>{
               setdata(prevdata => !prevdata)
    }
    return(
        <>
        <button onClick={handleChange}>{data? "Turn off": "Turn on"}</button>
        { data && (
            <div>
                <h2>content</h2>
            </div>
        )}
        </>
    )
}
export default Buttontoggle 



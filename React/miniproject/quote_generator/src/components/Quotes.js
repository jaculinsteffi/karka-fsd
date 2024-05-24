import axios from "axios"
import { useState } from "react"
const Quotes=()=>{
    const [data,setdata]=useState([])
    const [current,setcurrent]=useState(0)
    async function quote(){
        try{
            const response=await axios("https://type.fit/api/quotes")
            if(!response){
                throw new Error(`failed to load`)
            }
            else{
                setdata(response.data)
            }
           
        }
        catch (error){
            console.log(error)
            return null
        }
    }
    quote()
    const handleClick=()=>{
        setcurrent(current=== data.length-1? 0 :current+1)
        setcurrent(current===0?data.length-1:current-1)
    }
    return(
        <>
        <div className="main">
            <h2>Project 3: Quotes Generator</h2>
            <div className="quote">
                <button onClick={handleClick}>New quote</button>
                {data.map((item,i)=>(
                    current===i &&(
                        <><h4>{item.text}</h4>
                        <i>{item.author}</i></>
                    )
                   
                    
                    
                ))}
            </div>
        </div>
        
        </>
    )
}
export default Quotes
import {useState} from 'react'

const Input=()=>{
    const [name,setname]=useState("")
    const handleclk=(event)=>{
        event.preventDefault()
        console.log(name)
        setname("")
    }
    const handlechange=(event)=>{
        setname(event.target.value)
    }
    
    return(
        <form>
            {/* <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
            <button onClick={handleclk}>add</button> */}
            <input type='text' value={name} onChange={handlechange}/>
            <button onClick={handleclk}>add</button>
        </form>
    )
}

export default Input
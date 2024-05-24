import {useState} from 'react'
const Age=()=>{
    const [name,setname]=useState("")
    const [age,setage]=useState("")
    const [pass,setpass]=useState("")
    const handleclk=(event)=>{
         event.preventDefault()
         console.log(name)
         console.log(age)
         console.log(pass)
         setname("")
         setage("")
         setpass("")
    }
    const handlename=(event)=>{
        setname(event.target.value)
    }
    const handleage=(event)=>{
        setage(event.target.value)
    }
    const handlepass=(event)=>{
        setpass(event.target.value)
    }
    
    return(
        <>
        <input type="text" value={name} onChange={handlename}/>
        <input type="text" value={age} onChange={handleage}/>
        <input type="text" value={pass} onChange={handlepass}/>
        <p>{ }</p>
        <p>{age}</p>
        <p>{pass}</p>
        <button onClick={handleclk}>add</button>
        
        </>
    )
}
export default Age
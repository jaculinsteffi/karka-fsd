import { useState } from "react"

const ButtonToggle=()=>{
    const [isOn,setisOn]=useState(false)
    const handleClick=()=>{
        setisOn(!isOn)
    }
    return(
        <>
        <button onClick={handleClick}>{isOn ? "Turn off" : "Turn on"}</button>
        {isOn ? <p>Hello</p> : <></>}

        </>
    )
}
export default ButtonToggle
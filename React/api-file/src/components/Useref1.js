import { useRef } from "react"

const Counter=()=>{
    let input=useRef()
    const Focusinput=()=>{
        input.current.focus()
        input.current.style.backgroundColor="blue"
    }
    return(
        <>
        <input type="text" ref={input}/>
        <button onClick={Focusinput}>Focus</button>
        </>
    )
}
export default Counter
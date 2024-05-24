import { useState } from "react"
import Parent from "../Contextcomponents/Parent"
import NewContext from '../Contextnew'

const Grandparent=()=>{
    const [name,setname]=useState("jaculin")

    return(
        <>
        <NewContext.Provider value={name}>
        <Parent/>
        </NewContext.Provider>
        
        </>
    )
}
export default Grandparent
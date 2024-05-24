import { useContext } from "react"
import MyContext from "../Context"
import NewContext from '../Contextnew'

const Child=()=>{
    const context=useContext(MyContext)
    console.log(context)
    const Name=useContext(NewContext)

    return(
        <>
        <p>context</p>
        <h3>{Name}</h3>
        </>
    )
}
export default Child
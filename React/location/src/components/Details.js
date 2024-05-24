import { useLocation, useNavigate } from "react-router-dom"
import "../../src/style.css"
const Details=()=>{
    const location=useLocation()
    console.log(location)
    const navigation=useNavigate()
    const query= new URLSearchParams(location.search)
    const firstName=query.get('firstName')
    const lastName=query.get('lastName')
    const handleSubmit=(event)=>{
        event.preventDefault()
        navigation('/')
    }
    return(
        <>
        <div className="container css">
           <div className="cont">
        <h2>Details page</h2>
        <p>Location:{location.pathname}</p>
        <p>firstName:{firstName}</p>
        <p>lastName:{lastName}</p>
        <form onSubmit={handleSubmit}>
            <button type="submit">Home</button>
        </form>
        </div>
        </div> 
        </>
    )
}
export default Details
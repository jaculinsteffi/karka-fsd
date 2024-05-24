import axios from "axios"
import { useState } from "react"

const NextNew=()=>{
    const [nextdata,setnextdata]=useState({
        name:"",
        job:""
    })
    const [value,setvalue]=useState([])
    console.log(value)

    const handleNext=(e)=>{
       setnextdata({...nextdata,[e.target.name]:e.target.value})
    }
    const handleSubmit=async()=>{
        try{
            const FetchNew=await axios.post("https://reqres.in/api/users",{
                name: nextdata.name,
                job:nextdata.job
            })
            console.log(FetchNew)
            const fetch=FetchNew.data
            setvalue(fetch)
        }
        catch(error){
            console.log(error)
        }

    }
    return(
        <>
        <input type="text" onChange={handleNext} value={nextdata.name} name="name"/>
        <input type="text" onChange={handleNext} value={nextdata.job} name="job"/>
         <button onClick={handleSubmit}>Submit</button>
         {handleSubmit &&
         <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>id</th>
                    <th>createdAt</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{value.name}</td>
                        <td>{value.job}</td>
                        <td>{value.id}</td>
                        <td>{value.createdAt}</td>
                        <td><button className="btn btn-primary">Edit</button></td>
                        <td><button className="btn btn-primary">Delete</button></td>
                    </tr>
                
            </tbody>
         </table>
         }
        
        </>
    )
}
export default NextNew
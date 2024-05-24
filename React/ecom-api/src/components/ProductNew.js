import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const ProductNew=()=>{
    const Navi=useNavigate()
    const[Newdata,setNewdata]=useState([])
    console.log(Newdata)

    const Product= async()=>{
        try{
            const Api=await axios.get("https://reqres.in/api/users?page=2")
            const ApiProduct= Api.data.data
            setNewdata(ApiProduct)
        }
        catch(error){
            console.log(Error)
        }
        }
       
const ButtonClick=()=>{
   Navi("/NextNew")
}
    
    useEffect(()=>{
        Product()

    },[])
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                    
                </tr>
            </thead>
            <tbody>
                {Newdata.map((item,index)=>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td><img src={item.avatar} alt="avatar"/></td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={ButtonClick}>Next</button>
        
        </>
    )
}
export default ProductNew
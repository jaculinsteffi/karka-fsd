import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"



const List=()=>{
    const [data,setData]=useState([])
    console.log(data)
    async function ListData(){
        try{
            // const response=await fetch ("https://reqres.in/api/users?page=2")
            const response=await axios.get ("https://reqres.in/api/users?page=2")
            console.log(response)
            if(!response){
                throw new Error(`failed to login {response.status}`)
            }
      else{
        setData(response.data.data)
      }
        }
        catch(error){
            console.log("error reading:", error)
            return null
        }
    }
   
    useEffect(()=>{
      ListData()
    },[])
    
    return(
        <>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Avatar</th>
                    <th>View</th>
            
                </tr>
            </thead>
            <tbody>
               {data.map((datas,index)=>(
                <tr>
                    <td>{datas.id}</td>
                    <td>{datas.email}</td>
                    <td>{datas.first_name}</td>
                    <td>{datas.last_name}</td>
                    <td><img src={datas.avatar} alt="avatar"/></td>
                    <td> <Link to={`/View/${datas.id}`}>View</Link></td>
                </tr>
               ))}
            </tbody>
        </table>
        </>
    )
}
export default List
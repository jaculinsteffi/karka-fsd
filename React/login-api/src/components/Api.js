// import { useEffect } from "react"
// import axios from "axios"

// const Api=()=>{
//     async function Login(){
//         try{
//             // const response=await fetch ("https://reqres.in/api/login")
//             const response=await axios.get ("https://reqres.in/api/login")
//             console.log(response)
//             if(!response){
//                 throw new Error(`failed to login {response.status}`)
//             }
//            else{
//             console.log(response.data.data)
//            }
//         }
//         catch(error){
//             console.log("error reading:", error)
//             return null
//         }
//     }
//     useEffect(()=>{
//         Login()
//     },[])

//     return(
//         <>
        
//         </>
//     )
// }
// export default Api
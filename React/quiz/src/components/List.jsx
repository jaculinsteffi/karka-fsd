
// import { useState } from "react"
// const List=({mydata})=>{
//     console.log(mydata)
//     const [currentind,setcurrentind]=useState(0)
//     const [select,setselect]=useState(null)
//     const [score,setscore]=useState(0)
//     const [submit,setsubmit]=useState(true)
//     const [next,setnext]=useState(false)
//    const handleChange=(e)=>{
//     setselect(e.target.value)
//    }
//    const handleSubmit=()=>{
//     console.log(select)
//     if(mydata[currentind].option===select){
//         setscore(score+1)
//     }
//     setnext(true)
//     setsubmit(false)
//    }
//    const handleNext=()=>{
//     if(currentind<mydata.length-1){
//         setcurrentind(currentind+1)
//         setselect(null)
//         setsubmit(true)
//         setnext(false)

import { useState } from "react"

//     }
//     else{
//         alert("end")
//     }
//    }
   
//     return(
//         <>
//         <div>
//             <h3>{currentind+1}.{mydata[currentind].question}</h3>
//             <ul>
                
//                 {mydata[currentind].option.map((opt,i)=>(
//                     <div key={i}>
//                     <input type="radio" value={opt} name={currentind} checked={select===opt} onChange={handleChange}/>{opt}
//                     </div>
//                 ))}
               
//             </ul>
//         </div>
//         {currentind===mydata.length-1 && (
//             <div>
//                 <p>Quix completed:{score}</p>
//             </div>
//         )}
//         <div>
//             <button onClick={handleSubmit} disabled={submit!==true?true:false}>Submit</button>
//             <button onClick={handleNext} disabled={next!==true? true:false}>Next</button>
//         </div>
             
//         </>
//     )
// }
// export default List


const List=({mydata})=>{
    const [currentind,setcurrentind]=useState(0)
    const [select,setselect]=useState(null)
    const [score,setscore]=useState(0)
    const [submit,setsubmit]=useState(false)
    const [next,setnext]=useState(false)
    const handleChange=(e)=>{
              setselect(e.target.value)
    }
    const handleSubmit=()=>{
        console.log(select)
        if(select!=null){
            if(mydata[currentind].answer===select){
                setscore(score+1)
    
            }
            setsubmit(false)
            setnext(true)
        }
        else{
            alert("click correct answer")
        }
      
    }
  const handleNext=()=>{
    if(currentind<mydata.length-1){
        setcurrentind(currentind+1)
        setselect(null)
        setnext(false)
        setsubmit(false)

    }
    else{
        alert("end")

    }
  

  }
    return(
    <>
       <div>
        <h3>{mydata[currentind].question}</h3>
        <ul>
            {mydata[currentind].option.map((opt,i)=>(
                <div key={i}>
                    <input type="radio" value={opt} name={currentind} checked={opt===select} onChange={handleChange}/>{opt}
                </div>
            ))}
        </ul>
       </div>
       {currentind===mydata.length-1 &&(
        <p>Quiz completed:{score}</p>
       )}
       <div>
        <button  onClick={handleSubmit} disabled={submit!== true && select!=null ? false:true}>Submit</button>
        <button onClick={handleNext} disabled={next!==true? true:false}>Next</button>
        </div>
    </>
    )
}
export default List 
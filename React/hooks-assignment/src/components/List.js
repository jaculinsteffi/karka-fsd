import { useState } from "react"

const List=({myproduct})=>{
    console.log(myproduct)
    // const [data,setdata]=useState({
    //     i:""
    // })
    const[currentindex,setcurrentindex]=useState(0)
    const[select,setselect]=useState(null)
    const handleChange=(e)=>{
       setselect(e.target.value)

    }
    const handleSubmit=()=>{
        console.log(select)
        
    }
    const handleNext=()=>{
         
    }
    return(
        <>
         {/* {myproduct.map((ques,i)=>(
               <div key={i}>
           <h3>{i+1}{ques.question}</h3> <ul>
                {ques.option.map((opt, ind) => (
                    <div key={ind}>
                        <input type='radio' value={opt.option} name={i} onChange={handleChange}/>{opt}
                    </div>

                ))}
            </ul>
           </div> 
        ))}
        <button onClick={handleSubmit}>Submit</button>
        <button>Next</button>
           */}
           <div>
           <h3>{myproduct[currentindex].question}</h3>
           <ul>
            {myproduct[currentindex].option.map((data,i)=>( 
                <div  key={i}>
                     <input type="radio" value={data} name={currentindex} checked={select===data} onChange={handleChange}/>{data}
                </div>
            ))}
            </ul>
            </div>
           <div>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleNext}>Next</button>
           </div> 
        </>
    )
}
export default List
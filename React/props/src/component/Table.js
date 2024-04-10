// const Table=(props)=>{
//     console.log(props)
//     return(
//         <div>
//            <p>my name is {props.myName} </p>
//            <p>my age is {props.myAge}</p>
//            <p>I had done my {props.myDegree} in nagercoil</p>
//            <p>my roll no is {props.myRollNo}</p>
//            <p>{props.isMarried ? "yes" : "no"}</p>
//         </div>
//     )
// }
// export default Table

const Table=({myName,myAge,myDegree,myRollNo,isMarried,myStudent,mySkills})=>{
    console.log(mySkills)
    
    return(
        <div>
           <p>my name is {myName} </p>
           <p>my age is {myAge}</p>
           <p>I had done my {myDegree} in nagercoil</p>
           <p>my roll no is {myRollNo}</p>
           <p>{isMarried ? "yes" : "no"}</p>
           <h3>{myStudent.student1} and {myStudent.student3} are {myStudent.student2}'s friends</h3>
           {mySkills.map((data)=>(
        <li>{data}</li>
    ))}
     

        </div>
    )
}
export default Table
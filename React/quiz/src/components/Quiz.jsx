import { useState } from "react"
import List from '../components/List'
import Data from '../Quiz.json'

const Quiz=()=>{
    const [product]=useState(Data.data)
    console.log(product)
    return(
        <>
        <List mydata={product}/>
        </>
    )
} 
export default Quiz
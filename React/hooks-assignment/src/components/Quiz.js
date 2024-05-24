import { useState } from 'react'
import data from '../Quizdata.json'
import List from './List'
const Quiz = () => {
    const [product] = useState(data.data)
    console.log(product)
    return (
      <>
   
       
        <List myproduct={product}/>
      
      </>
    )
}
export default Quiz
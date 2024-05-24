import { useState } from 'react'
import Image from '../image.json'
const Carousel=()=>{
    const [image]=useState(Image.images)
    const [currentimage,setcurrentimage]=useState(0)
    // console.log(image)

    const leftClick=()=>{
        setcurrentimage(currentimage===0 ?image.length-1:currentimage-1)

    }
    const rightClick=()=>{
        setcurrentimage(currentimage=== image.length-1?0: currentimage+1)

    }
    return(
        <>
        <div className='project'>
            <h3>
                project 1: Image Carousel
            </h3>
        </div>
        <div>
            <div className='leftarrow' onClick={leftClick}>←</div>
            <div className='rightarrow' onClick={rightClick}>→</div>
        </div>
        {image.map((data,i)=>(
            currentimage===i &&(
                <div>
                <img src={data} alt='images'/>
            </div>
        )
           
        ))}
        
        </>
    )
}
export default Carousel
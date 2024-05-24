import { useState } from 'react'
import faq from '../faq.json'
const Faq = () => {
    const [Faq] = useState(faq.faq)
    console.log(Faq)
    const [button, setbutton] = useState(-1)
    const handleClick = (i) => {
        setbutton(button===i ? -1 : i)
    }
    return (
        <>
            <div className='project'>
                <h1>Project 2: FAQ/Accordian</h1>
            </div>
            <div className='faq' >
                <h2>Frequently Asked Question</h2>
                {Faq.map((data, i) => (

                    <><div className='first'>{data.title}<button className='button' onClick={() => handleClick(i)}>{button === i ? "-" : "+"}

                    </button>


                    </div><div className='second'>
                            {button===i &&
                                <div>{data.info}</div>}
                        </div></>


                ))}


            </div>

        </>
    )
}
export default Faq
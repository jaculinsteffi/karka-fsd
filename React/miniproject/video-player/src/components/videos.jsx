import { useState } from 'react'
import video from '../video.json'
const Videos = () => {
    const [Video] = useState(video.video)
    console.log(Video)
    // let num = Object.keys(Video).length
    const [videodata, setvideodata] = useState("")
    const handleChange = (e) => {
        setvideodata(e.target.value)
    }


    return (
        <>
            <div className='main'>
                <h2>Project 6: Video Player</h2>
                {Object.entries(Video).map(([key, value]) => (
                    <div key={value} className='radio'>
                        <div>
                        <input type='radio' value={key} name={videodata} onChange={handleChange} />
                        <label>{key}</label>
                        </div>
                        {videodata ===key &&(
                            <div>
                                <video controls autoPlay autostart="true ">
                                    <source src={value}></source>
                                </video>
                            </div>
                        )}
                    </div>


                ))}
                
            </div>
        </>
    )
}
export default Videos
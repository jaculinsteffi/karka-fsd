import { useState } from "react"

const Bmi=()=>{
    const default_height =50
    const default_weight=150
    const [height,setheight]=useState(default_height)
    const [weight,setweight]=useState(default_weight)
    const [Bmi,setBmi]=useState(null)
    const handleHeight=(e)=>{
      const inputheight=  e.target.value
      setheight(inputheight)
    }
    const handleWeight=(e)=>{
      const inputweight=  e.target.value
      setweight(inputweight)
    }
   const handleOutput=()=>{
        const heightinMeter=height/100
        setBmi((weight/(heightinMeter*heightinMeter)).toFixed(2))
    }
    return(
        <>
        <div className="main">
            <div className="section">
                <h1>Project 7: BMI CALCULATOR</h1>
            </div>
            <div className="first">
                <div className="firstone">
                    <p>Height :{height} cm</p>
                    <input type="range" min="140" max="200" onChange={handleHeight} value={height}/>
                </div>
                <div className="second">
                    <p>Weight:{weight} kg</p>
                    <input type="range" min="40" max="220" onChange={handleWeight} value={weight}/>
                </div>
                <div className="third">
                    <p>Your BMI is:{Bmi}</p>
                    <div className="bmi" onClick={handleOutput} >Calculate</div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Bmi
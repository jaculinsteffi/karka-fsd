import Profile from '../Image/Profile.jpeg'
const about=()=>{
    return(
        <>
        <div className="row">
            <div className="col-lg-6 profilepic">
                <img src={Profile} alt="jaculin" className="profile"/>
            </div>
            <div className="col-lg-5 details">
                 
            <p className='firstline'>Hi, I am <br /> <span className="name"> JACULIN STEFFI J</span></p>
        
           <p className='secondline'> I'm a <span class="devp-role">Front-End Developer !</span></p>
        
          
          <p className='thirdline'>A dedicated front-end developer passionate about crafting immersive digital experiences. With a creative mindset and an eye for detail, I specialize in translating design concepts into elegant and responsive websites. Through my commitment to innovation and user-centric design, I strive to create seamless and memorable interactions that elevate the web browsing experience. Let's collaborate to bring your vision to life and make an impact in the digital world.</p>
            </div>
            <div className='col-lg-1'></div>

          
          

        </div>
        </>
    )
}
export default about
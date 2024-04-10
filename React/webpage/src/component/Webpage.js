import image from "../image/nature.jpeg"
const Web=()=>{
    return(
        <>
        <div className="row">
            <div className="elite col-lg-4 fs-2 d-flex justify-content-center align-items-center">ELITE
            </div>
            <div className="col-lg-8">
            <nav className="navbar navbar-expand-lg bg-body-light fw-semibold">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown" >  
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
            </div>
        </div>
        <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <img src={image} alt="image"/>
                </div>
                <div className="col-lg-2"></div>
        </div>
        </>
    )
}
export default Web
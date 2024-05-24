import { Link } from "react-router-dom";

const header=()=>{
    return(
        <>
      
          <nav class="navbar bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      PORTFOLIO
    </a>
    <ul class="nav justify-content-end">
    <li class="nav-item">
    
        <Link to={'/'} className="nav-link active" aria-current="page">About
</Link>
  </li>
  <li class="nav-item">
   
        <Link to={'/Education'}  className="nav-link active" aria-current="page">Education
</Link>
    
  </li>
  <li class="nav-item">
    <Link to={'/Experience'} className="nav-link" >Experience</Link>
    
  </li>
  <li class="nav-item">
  <Link to={'/Project'} className="nav-link" >Project</Link>
  </li>
  <li class="nav-item">
  <Link to={'/Contact'} className="nav-link" >Contact</Link>
  </li>
</ul>
  </div>
</nav>

        </>
    )
}
export default header
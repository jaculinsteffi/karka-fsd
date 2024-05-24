import {Link} from 'react-router-dom'
const Home=()=>{
    let name='karka'
    return(
        <div>
            <h1>
                Welcome to this website!
            </h1>
            {/* <Link to="/details?firstName=Alen&lastName=Roy">Details</Link> */}
            <Link to={`/details?firstName=John&lastName=Doe#${name}`}>Details</Link>
        </div>
    )
}
export default Home
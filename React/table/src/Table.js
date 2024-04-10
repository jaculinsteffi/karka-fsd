import flower from "./image/flower.jpg"
import sparrow from "./image/sparrow.jpg"


const Table=()=>{
    let items=[
        {
            id:1,
            Name:"jaculin",
            Age:27,
            Image:flower
        },
        {
            id:2,
            Name:"sajin",
            Age:25,
            Image:sparrow
        }
    ]
    return(
        <table className="table" >
            <thead>
            <tr>
                <th>SI No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
                {items.map((data,index)=>(
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.Name}</td>
                        <td>{data.Age}</td>
                        <td className="image"><img src={data.Image} alt={data.Name}/></td>
                    </tr>
                ))}

            </tbody>
           
        </table>
    )
}
export default Table
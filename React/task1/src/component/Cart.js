const Product=({myProduct})=>{
    return(
    
        <table>
            <thead>
                <tr>
                    <th>SI.No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {myProduct.map((data,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td><img src={data.img} alt="data.name"/></td>
                        <td>{data.price}</td>
                        <td>{data.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    )
}
export default Product
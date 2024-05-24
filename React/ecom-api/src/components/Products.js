import axios from "axios"
import { useEffect, useState } from "react"
const Products=()=>{
    const [productData,setproductData]=useState([])
    console.log(productData,"kk")

    async function ProductData(){
        try{
            const response=await axios.get("https://fakestoreapi.com/products")
            if(!response.ok){
                console.log(response.data)
                const responseData=response.data
                setproductData(responseData)
            }
        }
        catch(error){
            console.log("error")
        }
    }
    
    // ProductData()
    useEffect(()=>{
        ProductData()
    },[])
    
  const truncateDescription=(description)=>{
    if(description.length>30){
        return description.substring(0,70)+ "..."
    }
    return description
  }
    
    return(
        <>
              <h1 style={{textAlign:"center"}}>Products</h1>
    <div>
        <table border={0}>
            <thead>
                <tr>
                    <th>SI.No</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Cart</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {productData.map((item,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td><img src={item.image} alt="image"/></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td className="button"><button className="btn btn-primary"> Cart</button></td>
                        <td><button className="btn btn-primary">Edit</button></td>
                        <td><button className="btn btn-primary">Delete</button></td>
                    </tr>
                ))}

            </tbody>
        </table>
    {/* {productData.map((item,index)=>(
      <div className="card" >
      <div className="card-body">
         <img src={item.image} className="card-img-top" alt="image"/>
         <h5 className="card-title">{item.title}</h5>
         <p className="card-text">{item.price}</p>
         <p className="card-text">{item.description}</p>
         <div>{truncateDescription(item.description)}</div>
         <div className="Button"><button className="btn btn-primary">Add to Cart</button></div>
  </div>
</div>

))
} */}
</div>
        </>
  
    )
 
    
}
export default Products
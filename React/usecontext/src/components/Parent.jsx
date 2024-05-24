import Child from "./Child"
const Parent=({data})=>{
    console.log(data)
    return(
        <>
        Parent
        <Child props={data}/>
        </>
    )
}
export default Parent
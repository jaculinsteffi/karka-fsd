import Parent from "./Parent"
const Grandparent=()=>{
    const asserts="House"
    return(
        <>
        Grandparent
        <Parent data={asserts}/>
        
        </>
    )
}
export default Grandparent
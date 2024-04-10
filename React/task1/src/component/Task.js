const Table=({myStudent})=>{
    console.log(myStudent)
    return(
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
               
                    {myStudent.map((data,index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                        </tr>

                    ))}
            </tbody>
        </table>
    )
}
export default Table
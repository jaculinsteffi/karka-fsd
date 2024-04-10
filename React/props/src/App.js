import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Table from './component/Table';
const App=()=>{
  // const isLogin=false
  const name="indhuja"
  let age=24
  let students={
    student1:"sajin",
    student2:"jaculin",
    student3:"alen"
  }
  let skills=["HTML","CSS","JS"]
  return(
    <div className='App'>
       {/* {isLogin?<Login/>
       :<Register/>} */}
       <Table myName={name} myAge={age} myDegree="B.E" myRollNo={21} isMarried={true} myStudent={students} mySkills={skills}/>

       </div>
  )
}

export default App;

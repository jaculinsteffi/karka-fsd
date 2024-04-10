import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
// import Button from './Components/Button'
import Image from './images/8-free-React-app-hosting-services-Cover (1).png'
function App() {
  // const add=()=>{
  //   console.log("hi")
  // }
  // let name="sajin"
  let obj={
    name:"sajin",
    age:24
  }
  return (
    <div className="App">
     
          <Welcome/>
          <img src={Image} alt="Image"/>
          <h1>Welcome to {obj.name}'s page,and my age is{obj.age}</h1>
          
      
    </div>
  );
}

export default App;

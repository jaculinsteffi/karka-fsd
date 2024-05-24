import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
// import Input from './components/Input';
// import Age from './components/Age'
import Multiple from './components/Multiple'

function App() {
  const add=()=>{
    alert("hi")
  }
  
  return (
   <>
   {/* <Button clk={add}/> */}
  {/* <Button/> */}
  {/* <Input/> */}
  {/* <Age/> */}
  <Multiple/>
   </>
  );
}

export default App;

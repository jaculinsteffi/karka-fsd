import logo from './logo.svg';
import './App.css';
import Login from './component/Login'
import Register from './component/Register'
import Main from './component/main'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="Register" element={<Register/>} />

    

   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;

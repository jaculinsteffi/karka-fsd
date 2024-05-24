import './App.css';
import Welcome from './components/Welcome'
import Login from './components/Login'
import Registration from './components/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='Registration' element={<Registration/>}/>
      <Route path='Welcome' element={<Welcome/>}/>
    </Routes>
    </BrowserRouter>
   

    </>
  );
}

export default App;

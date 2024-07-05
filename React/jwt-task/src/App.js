import Login from './components/Login'
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home'

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Home' element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
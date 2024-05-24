// import Api from './components/Api'
import List from './components/List'
import './App.css';
import Login from './components/Login'
import View from './components/View'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App=()=>{
  return(
    <>
    {/* <Api/> */}
    
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="List" element={<List/>} />
    <Route path='/View/:id' element={<View/>} />

    

   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App
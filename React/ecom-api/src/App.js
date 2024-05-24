import Login  from './components/Login';
import './App.css';
import Products from './components/Products'
import Cart from './components/Cart'
import {  Routes , Route, BrowserRouter } from 'react-router-dom';
import LoginNew from './components/Loginnew'
import ProductNew from './components/ProductNew'
import NextNew from './components/NextNew'

const App=()=>{
  return(
    <>
     
     {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='Cart' element={<Cart/>}/>
      </Routes>
     </BrowserRouter> */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LoginNew/>}/>
      <Route path='ProductNew' element={<ProductNew/>}/>
      <Route path="NextNew" element={<NextNew/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App



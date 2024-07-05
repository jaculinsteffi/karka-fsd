import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


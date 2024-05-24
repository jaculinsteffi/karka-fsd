import './App.css';
import Header from './component/Header'
import Education from './component/Education'
import Experience from './component/Experience'
import Project from './component/Project'
import Contact from './component/Contact'
import About from './component/About'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/Education" element={<Education/>}/>
      <Route path="/Experience" element={<Experience/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Contact" element={<Contact/>}/>
   
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

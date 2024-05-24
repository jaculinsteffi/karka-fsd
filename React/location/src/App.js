import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Details from './components/Details'

const App=()=> {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Details' element={<Details/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;

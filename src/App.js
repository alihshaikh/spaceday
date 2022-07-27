
import './App.css';
import Home from './pages/Home'
import Apod from './pages/Apod'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/Apod" element={<Apod/>} />
        </Routes>
        
      </Router>
    </div>
    
   
  );
}

export default App;

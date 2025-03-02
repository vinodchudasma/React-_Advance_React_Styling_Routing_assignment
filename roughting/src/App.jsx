import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Contect from './Contect';
import Home from './Home';
import Menu from './Menu';
import './App.css';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contect" element={<Contect />} > 
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import About from './About';
import Courses from './Courses';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import Contact from './Contact';

function App() {
  return (
    <div><Router>
      <Link to="/">Home </Link>
      <Link to="/blog">Blog </Link>
      <Link to="/contact">Contact Us </Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

      </Routes>     
    </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Homepage from './Homepage';
import Aboutpage from './Aboutpage';
import ContactPage from './Contact';
import Blogpage from './Blog';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/">Home </Link>
      <Link to="/blog">Blog </Link>
      <Link to="/contact">Contact Us </Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/blog" element={<Blogpage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/about" element={<Aboutpage/>}></Route>

      </Routes>     
    </div>
    </Router>
  );
}

export default App;

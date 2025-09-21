import './StyleSheet/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {

  return (
    <div className='app-b'>
    <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
              <Route
    path="/"
    element={
      <div className="main-content">
        <h1>Welcome to My Startup</h1>
        <p>This is the homepage content written directly in App.jsx.</p>
        <button className="know">Get Started</button>
      </div>
    }
  />

          </Routes>
    </Router>
    </div>
  );
}

export default App;
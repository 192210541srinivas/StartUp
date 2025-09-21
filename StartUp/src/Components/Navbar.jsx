// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../StyleSheet/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><img src="\Resources\Images\freepik__assistant__33042.png" className="logo"></img></Link>
      <ul className="nav-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  );
}
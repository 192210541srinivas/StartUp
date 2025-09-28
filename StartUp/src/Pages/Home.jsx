import "../StyleSheet/Home.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../Pages/Footer";

export default function Home() {
  const navigate = useNavigate();
  return(
    <div className="home">
      <div className="front">
        <h1 className="we">Welcome to </h1>
        <h1 className="name">Epicurean Eats</h1>
        <p className="pa">Discover refined recipes with a royal touch to elevate seasonal ingredients</p>
        <button className="abtus" onClick={() => navigate('/About')}><img src="/Resources/Images/hh.png" className="hh"></img>About Us ⟶</button>
      </div>
      <div className="info">
      <div className="overview">
        <div className="o1">Biryani</div>
        <div className="o2">Pizza</div>
        <div className="o3">Sandwich</div>
        <div className="o4">Burger</div>
        <div className="o5">Rice</div>
      </div>
      </div>
    </div>
  );
}

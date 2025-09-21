import "../StyleSheet/Landing.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <div className='l'>
        <img src="/Resources/Images/download.png" className='logo-1' alt="logo" />
        <h1 className='tit'>Epicurean Eats</h1>
      </div>
      <p className='slogan'>Refined Bites. Bold Flavors</p>
      <button className="know-1" onClick={() => navigate('/Home')}>
        Get Started
      </button>
    </div>
  );
}

export default Landing;
import React, { useState } from "react";
import "../StyleSheet/About.css"

export default function About() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function Toggle() {
    setIsSidebarOpen(!isSidebarOpen);
  }


  return(
    <div className="title">
      <div className="contact1" onClick={Toggle}><img src="/Resources/Images/icon-removebg-preview.png"></img>
            {isSidebarOpen && (

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        )}
      </div>
      <div className="author">
        <div className="photo-2">
          <img src="/Resources/Images/person.png" className="Ph-2"></img>
        </div>
        <div className="inf">
          <h1><strong>Rohan Vellaturi</strong></h1>
          <h2>Founded in 2020</h2>
          <p>The visionary behind Epicurean Eats, grew up immersed in the rich culinary traditions of South India, where every meal was a celebration of flavor and family. Inspired by his roots and refined through global culinary training, he set out to create a dining experience that blends elegance with authenticity. Epicurean Eats is the result—a place where bold spices meet sophisticated presentation, and every dish tells a story of heritage, passion, and innovation.</p>
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState} from "react";
import "../StyleSheet/Intro.css";

export default function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // signal to hide splash
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src="/logo.png" alt="Logo" className="logo-slide" />
    </div>
  );
}
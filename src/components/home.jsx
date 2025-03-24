import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"; // Corrected import

const Home = () => {
  return (
    <div className="container">
      <div className="top-buttons">
        <Link to="/register" className="button register">Register</Link>
        <Link to="/login" className="button login">Login</Link>
      </div>
      <div className="header">
        <h2 className="title">RUBICLOZ GAMING PLATFORM </h2>
      </div>
      <div className="hero">
        <div className="hero-image">
         {/* <img src="/rubicloz.jpg" alt="Rubicloz Betting" className="hero-img" /> */}
          <p className="hero-text">RUBICLOZ Bet</p>
        </div>
      </div>
      <p className="footer-text">GIFT CODE (Updates Every Day)</p>
    </div>
  );
};

export default Home;


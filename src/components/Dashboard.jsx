import React from "react";
import "./../styles/Dashboard.css"; // Ensure this CSS file matches the UI style
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
      <img src="./logor.avif" alt="R Logo" className="logo-icon" />
        <div className="logo">RUBI<span>CLOZ</span></div>
        <button className="notification-btn">🔔</button>
      </header>
      
      {/* Banner Section */}
      <div className="banner">
        <h2>Welcome To Rubicloz<br />Deposit Now</h2>
        <p>Deposit and Win</p>
        <button className="dashboard-button deposit">Deposit</button>
        <button className="dashboard-button withdraw">Withdraw</button>
      </div>

      {/* Wallet Balance */}
      <div className="wallet-section">
        <p>Wallet balance</p>
        <h3>₹28.00</h3>
      </div>

      {/* Menu Options */}
 
      {/* Category Section */}
    
      {/* Lottery Section */}
      <section className="lottery-section">
        <h3>Lottery</h3>
        <p>The games are independently developed by our team, fun, fair, and safe.</p>
        <div className="lottery-games">
          <div className="game">WIN GO</div>
          <div className="game">K3</div>
          <div className="game">5D</div>
          <div className="game">TRX WINGO</div>
        </div>
      </section>

      {/* Floating Add to Desktop Button */}
     
    </div>
  );
};

export default Dashboard;


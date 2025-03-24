import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGamepad, FaWallet, FaGift, FaUser, FaHeart } from "react-icons/fa";
import "../styles/Navbar.css"; 

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li className={location.pathname === "/promotion" ? "active" : ""}>
          <Link to="/promotion">
            <FaHeart />
            <span>Promotion</span>
          </Link>
        </li>
        <li className={location.pathname === "/activity" ? "active" : ""}>
          <Link to="/activity">
            <FaGift />
            <span>Activity</span>
          </Link>
        </li>
        <li className={location.pathname === "/dashboard" ? "active center" : "center"}>
          <Link to="/dashboard">
            <FaGamepad />
          </Link>
        </li>
        <li className={location.pathname === "/wallet" ? "active" : ""}>
          <Link to="/wallet">
            <FaWallet />
            <span>Wallet</span>
          </Link>
        </li>
        <li className={location.pathname === "/account" ? "active" : ""}>
          <Link to="/account">
            <FaUser />
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


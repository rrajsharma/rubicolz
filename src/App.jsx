import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./pages/Dashboard";
import Promotion from "./pages/Promotion";
import Activity from "./pages/Activity";
import Wallet from "./pages/Wallet";
import Account from "./pages/Account";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Navbar from "./components/Navbar";

// Function to protect routes
const ProtectedRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard with Navbar */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute element={
              <>
                <Navbar />
                <Dashboard />
              </>
            } />
          }
        />

        {/* Other pages */}
        <Route path="/promotion" element={<ProtectedRoute element={<Promotion />} />} />
        <Route path="/activity" element={<ProtectedRoute element={<Activity />} />} />
        <Route path="/wallet" element={<ProtectedRoute element={<Wallet />} />} />
        <Route path="/account" element={<ProtectedRoute element={<Account />} />} />
      </Routes>
    </div>
  );
}

export default App;

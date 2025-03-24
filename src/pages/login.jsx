import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./../styles/login.css"; // Using common styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("❌ Please enter both email and password!", { theme: "dark", transition: Bounce });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      toast.success("✅ Login Successful!", { theme: "dark", transition: Bounce });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      toast.error("❌ Invalid email or password!", { theme: "dark", transition: Bounce });
    }
  };

  const handleForgotPassword = () => {
    const emailInput = window.prompt("Enter your registered email:");

    if (!emailInput) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex((user) => user.email === emailInput);

    if (userIndex !== -1) {
      const newPassword = window.prompt("Enter your new password:");
      if (!newPassword) return;

      users[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));

      toast.success("✅ Password updated successfully!", { theme: "dark", transition: Bounce });
    } else {
      toast.error("❌ Email not found!", { theme: "dark", transition: Bounce });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleLogin}>Login</button>
        
        {/* Forgot Password Feature */}
        <p className="auth-footer">
          <button onClick={handleForgotPassword} className="forgot-password-link">Forgot Password?</button>
        </p>

        <p className="auth-footer">
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")}>Register</button>
        </p>
      </div>
    </div>
  );
};

export default Login;

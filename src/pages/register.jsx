import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./../styles/register.css"; // Ensure correct path

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("❌ Please fill in all fields!", { theme: "light", transition: Bounce });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("❌ Passwords do not match!", { theme: "light", transition: Bounce });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === email)) {
      toast.error("❌ Email is already registered!", { theme: "light", transition: Bounce });
      return;
    }

    users.push({ firstName, lastName, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("✅ Registration Successful!", { theme: "light", transition: Bounce });

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Create Your Account</h2>

        <input type="text" placeholder="First Name" className="auth-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" className="auth-input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" className="auth-input" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password (min 8 characters)" className="auth-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" className="auth-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <button className="auth-button" onClick={handleRegister}>Register</button>

        <p className="auth-footer">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")}>Login</button>
        </p>
      </div>
    </div>
  );
};

export default Register;  // ✅ Ensure this is present

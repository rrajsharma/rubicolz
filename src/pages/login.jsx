import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("❌ Please enter both email and password!", { theme: "dark", transition: Bounce });
      return;
    }

    setLoading(true);

    try {
      // 🔹 Replace with your actual backend API URL
      const response = await fetch("http://your-api-url.com/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Save user session
        localStorage.setItem("loggedInUser", JSON.stringify(data.user));

        toast.success("✅ Login Successful! Redirecting...", { theme: "dark", transition: Bounce });

        // Redirect to Dashboard
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        toast.error(data.message || "❌ Invalid email or password!", { theme: "dark", transition: Bounce });
      }
    } catch (error) {
      toast.error("❌ Network error! Please try again later.", { theme: "dark", transition: Bounce });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <button className="auth-button" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="auth-footer">
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")}>Register</button>
        </p>
      </div>
    </div>
  );
};

export default Login;

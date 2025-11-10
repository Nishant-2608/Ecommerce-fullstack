// src/components/Login_component/login.jsx
import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../services/AuthContext";

export function Login() {
  const { user, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (user) return <Navigate to="/home" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const data = await res.json();
        login(username, data.token);
      } else {
        const errText = await res.text();
        setError(errText || "Invalid credentials");
      }
    } catch (err) {
      setError("Server not reachable");
      console.error(err);
    }
  };

  return (
    <div className="bg">
      <div className="login shadow-lg p-5 mb-5 bg-body rounded">
        <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
          <h2 style={{ fontFamily: 'cursive' }}>Welcome to Ecart</h2>
          <input type="text" placeholder="UserName" value={username}
                 autoComplete="username" onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password}
                 autoComplete="current-password" onChange={e => setPassword(e.target.value)} />
          <button className="btn btn-primary" type="submit">
            <i className="bi bi-person-fill"></i> Login
          </button>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <p id="reg"><Link to="/register">New User? Register</Link></p>
        </form>
      </div>
    </div>
  );
}

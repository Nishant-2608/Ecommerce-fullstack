// src/components/Login_component/registration.jsx
import React, { useState } from "react";
import "./Registration.css";

export function Registration() {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, username, password })
      });
      if (res.ok) {
        setMessage("Registered successfully.");
        // Redirect to login page
        window.location.href = "/login";
      } else {
        setMessage(await res.text());
      }
    } catch (err) {
      setMessage("Server not reachable");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2 className="form-title">Create an Account</h2>
        <form className="registration-form" onSubmit={handleRegister}>
          <div className="form-row">
            <label>First Name :</label>
            <input type="text" value={firstName} onChange={(e)=>setFirst(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Last Name :</label>
            <input type="text" value={lastName} onChange={(e)=>setLast(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Email :</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Username :</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Password :</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="form-button">
            <button type="submit">Register</button>
          </div>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}

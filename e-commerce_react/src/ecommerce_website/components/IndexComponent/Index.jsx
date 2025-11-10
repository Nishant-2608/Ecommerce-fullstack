// src/index.jsx
import React from "react";
// import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from "../MainComponent/Main";
import { Header } from "../HeaderComponent/Header";
import { Footer } from "../FooterComponent/Footer";
import { Login } from "../LoginComponent/Login";
import { Registration } from "../LoginComponent/Registration";
import AuthenticatedRoute from "../AuthenticationComponent/AuthenticateRoute";
import { AuthProvider } from "../../services/AuthContext";
import "@fortawesome/fontawesome-free/css/all.min.css";


function Index() {
  return (
    <AuthProvider>
      <div className="container-fluid p-0">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/home" element={
              <AuthenticatedRoute>
                <Header />
                <Main />
                <Footer />
              </AuthenticatedRoute>
            } />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}
export { Index };

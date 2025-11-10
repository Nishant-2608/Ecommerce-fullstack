// src/components/Authentication_component/authenticateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthenticationService from "./authenticationService";


const AuthenticatedRoute = ({ children }) => {
  if (AuthenticationService.isUserLoggedIn()) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default AuthenticatedRoute;

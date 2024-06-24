import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
  const token = localStorage.getItem('accessToken');
  let isAuthenticated = !!token;
  let userRole = null;

  if (token) {
    try {
      const decodedToken = jwt_decode(token);
      userRole = decodedToken.role;
      if (Date.now() >= decodedToken.exp * 1000) {
        isAuthenticated = false;
      }
    } catch (error) {
      isAuthenticated = false;
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userRole === role ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;

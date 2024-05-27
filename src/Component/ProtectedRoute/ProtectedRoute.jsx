import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  console.log(location);
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
};

export default ProtectedRoute;

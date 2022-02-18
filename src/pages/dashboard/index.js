import React from "react";
import { Navigate } from "react-router-dom";

// TODO - Make Protected Route , Redirect if not logged in
const index = () => {
  const isLoggedIn = false; // TODO: Implement LocalStorage Token
  if (!isLoggedIn) return <Navigate to="/home" />;
  return <div>Its dashboard baby</div>;
};

export default index;

import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function RestrictAuth() {
  const location = useLocation();
  console.log(location);
  const {
    auth: { isLoggedIn },
  } = useAuth();
  return !isLoggedIn ? <Outlet /> : <Navigate to='/profile'></Navigate>;
}

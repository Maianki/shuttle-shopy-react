import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function RequireAuth() {
  const {
    auth: { isLoggedIn },
  } = useAuth();
  // const location = useLocation();

  return isLoggedIn ? <Outlet /> : <Navigate to='/login'></Navigate>;
}

import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function NotAuthenticatedRoute() {
  const location = useLocation();
  console.log(location);
  const {
    auth: { isLoggedIn },
  } = useAuth();
  return !isLoggedIn ? <Outlet /> : <Navigate to='/profile'></Navigate>;
}

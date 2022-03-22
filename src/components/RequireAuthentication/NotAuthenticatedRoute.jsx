import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function NotAuthenticatedRoute() {
  const {
    auth: { isLoggedIn },
  } = useAuth();
  return !isLoggedIn ? <Outlet /> : <Navigate to='/profile' replace></Navigate>;
}

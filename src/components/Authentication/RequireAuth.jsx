import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function RequireAuth() {
  const {
    auth: { encodedToken },
  } = useAuth();

  const location = useLocation();

  return encodedToken ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}

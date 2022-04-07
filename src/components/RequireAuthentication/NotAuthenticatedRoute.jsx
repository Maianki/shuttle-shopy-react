import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function NotAuthenticatedRoute() {
  const {
    auth: { encodedToken },
  } = useAuth();
  return encodedToken ? (
    <Navigate to='/shop-now' replace></Navigate>
  ) : (
    <Outlet />
  );
}

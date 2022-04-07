import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function AuthenticatedRoute() {
  const {
    auth: { encodedToken },
  } = useAuth();

  return encodedToken ? <Outlet /> : <Navigate to='/login' replace></Navigate>;
}

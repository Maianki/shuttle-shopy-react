import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function RestrictAuth() {
  const {
    auth: { encodedToken },
  } = useAuth();

  const location = useLocation();

  return encodedToken ? (
    <Navigate
      to={`${
        location?.state?.from?.pathname
          ? location?.state?.from?.pathname
          : "/shop-now"
      }`}
      replace
    />
  ) : (
    <Outlet />
  );
}

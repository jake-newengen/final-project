import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated } from "utils/auth";

const AuthLayout = () => {
  const nav = useNavigate();

  useEffect(() => {
    if(isAuthenticated()) {
      nav("/urls")
    }
  }, [])

  return <Outlet />
}

export { AuthLayout };
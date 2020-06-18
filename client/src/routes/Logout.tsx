import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.removeItem("s-tk");
    navigate("/auth/login")
  }, [])

  return null;
}

export { Logout };
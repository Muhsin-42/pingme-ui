"use client";
import React from "react";

const ProtectedProvider = ({children}: {children: React.ReactNode}) => {
  const token = localStorage.getItem("token");
  if (!token) return (window.location.href = "/auth");

  return <div>{children}</div>;
};

export default ProtectedProvider;

"use client";
import React from "react";

const UnProtectedProvider = ({children}: {children: React.ReactNode}) => {
  const token = localStorage.getItem("token");
  if (token) return (window.location.href = "/");
  return <div>{children}</div>;
};

export default UnProtectedProvider;

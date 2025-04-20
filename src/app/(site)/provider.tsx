"use client";

import React, {useEffect, useState} from "react";

const ProtectedProvider = ({children}: {children: React.ReactNode}) => {
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    // Check for token only on the client-side
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/auth";
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  return <div>{children}</div>;
};

export default ProtectedProvider;

"use client";

import React, {useEffect, useState} from "react";

const UnProtectedProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for token only on the client-side
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/";
    } else {
      setIsLoaded(true);
    }
  }, []);

  // Return children only after we've checked authentication on the client side
  // This prevents any flash of protected content
  return <div>{isLoaded ? children : null}</div>;
};

export default UnProtectedProvider;

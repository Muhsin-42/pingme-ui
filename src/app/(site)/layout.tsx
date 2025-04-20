import React from "react";
import ProtectedProvider from "./provider";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <ProtectedProvider>{children}</ProtectedProvider>
    </div>
  );
};

export default Layout;

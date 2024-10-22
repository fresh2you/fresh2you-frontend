import React, { ReactNode, useEffect } from "react";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return <>{children}</>;
};

export default AuthWrapper;

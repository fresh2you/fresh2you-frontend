import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const AuthWrapper = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return <Outlet />;
};

export default AuthWrapper;

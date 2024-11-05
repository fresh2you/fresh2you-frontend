import { useState, useEffect } from "react";

const useInitialRender = (): boolean => {
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  return isInitialRender;
};

export default useInitialRender;

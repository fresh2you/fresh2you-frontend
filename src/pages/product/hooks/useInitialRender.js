import { useEffect } from "react";

const useInitialRender = (products, setInitialRender) => {
  useEffect(() => {
    if (products.length > 0) {
      setInitialRender(false);
    }
  }, [products]);
};

export default useInitialRender;

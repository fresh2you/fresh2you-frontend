import { useEffect } from "react";

const useStoredProductInfo = (showProductInfo: boolean) => {
  useEffect(() => {
    if (sessionStorage.getItem("showProductInfo") === null) {
      sessionStorage.setItem("showProductInfo", JSON.stringify(showProductInfo));
    }
  }, [showProductInfo]);
};

export default useStoredProductInfo;

import { useState, useEffect } from "react";
import { validateProductData } from "../utils/productDataUtils";

const useRegistrationLogic = () => {
  const [productData, setProductData] = useState<ProductDataType>({
    name: "",
    description: "",
    price: "",
    image: null,
    imagePreview: "",
    categoryId: 0,
    quantity: "",
  });

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const isValid = validateProductData(productData);
    setIsFormValid(isValid);
  }, [productData]);

  return {
    productData,
    setProductData,
    isFormValid,
  };
};

export default useRegistrationLogic;

import { useState, useEffect } from "react";

const usePaymentMethodReady = (showPaymentMethod: boolean) => {
  const [isPaymentMethodReady, setIsPaymentMethodReady] = useState(false);

  useEffect(() => {
    setIsPaymentMethodReady(showPaymentMethod);
  }, [showPaymentMethod]);

  return isPaymentMethodReady;
};

export default usePaymentMethodReady;

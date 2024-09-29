import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectIfNotAgreed = (isAgreedToTerms) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAgreedToTerms) {
      navigate("/auth/signup/terms");
    }
  }, [isAgreedToTerms, navigate]);
};

export default useRedirectIfNotAgreed;

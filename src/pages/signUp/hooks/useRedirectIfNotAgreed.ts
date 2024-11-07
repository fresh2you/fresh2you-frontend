import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectIfNotAgreed = (isAgreedToTerms: TermAgreement[]) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAgreedToTerms.length === 0) {
      navigate("/auth/signup/terms");
    }
  }, [isAgreedToTerms, navigate]);
};

export default useRedirectIfNotAgreed;

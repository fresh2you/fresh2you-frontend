import { signUpUser } from "@/pages/signUp/api/signUpUser";
import { checkRequiredTermsAgreed } from "../utils/termsHelper";
import { toast } from "react-toastify";

export const handleSubmit = async (isSocialLoginRedirect, isAgreed, state, termsChecked, navigate) => {
  const areAllRequiredTermsAgreed = checkRequiredTermsAgreed(termsChecked);
  if (!areAllRequiredTermsAgreed) {
    toast.error("회원가입을 진행하기 위해서는 필수 약관에 동의해야 합니다");
    return;
  }

  const termsAgreements = Object.entries(termsChecked).map(([termsId, isAgreed]) => ({
    termsId: parseInt(termsId),
    isAgreed,
  }));

  if (isSocialLoginRedirect && state) {
    try {
      const { success, token } = await signUpUser(true, state, termsAgreements);

      if (success) {
        sessionStorage.clear();
        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("accessExpiredAt", token.accessExpiredAt);
        navigate("/auth/signup/complete");
      }
    } catch (error) {
      console.log(error);
      navigate("/auth/signin");
    }
  } else {
    navigate("/auth/signup/info", {
      state: { termsAgreements: termsAgreements },
    });
  }
};

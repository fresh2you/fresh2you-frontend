import authAPI from "@/services/api/authAPI";
import { checkRequiredTermsAgreed } from "../utils/termsHelper";
import { toast } from "react-toastify";
import { NavigateFunction } from "react-router-dom";

interface TermsChecked {
  [key: string]: boolean;
}

export const handleSubmit = async (
  isSocialLoginRedirect: boolean,
  state: SocialSignUpRequest,
  termsChecked: TermsChecked,
  navigate: NavigateFunction,
): Promise<void> => {
  const areAllRequiredTermsAgreed = checkRequiredTermsAgreed(termsChecked);

  if (!areAllRequiredTermsAgreed) {
    toast.error("회원가입을 진행하기 위해서는 필수 약관에 동의해야 합니다");
    return;
  }

  const termsAgreements = Object.entries(termsChecked).map(([termsId, isAgreed]) => ({
    termsId: parseInt(termsId, 10),
    isAgreed,
  }));

  if (isSocialLoginRedirect) {
    try {
      const response = await authAPI.signUp({
        email: state.email,
        nickname: state.nickname,
        termsAgreements: termsAgreements,
        provider: state.provider,
        providerId: state.providerId,
        password: null,
        confirmPassword: null,
      });

      if (response.success) {
        sessionStorage.clear();
        localStorage.setItem("accessToken", response.token.accessToken);
        localStorage.setItem("accessExpiredAt", response.token.accessExpiredAt);
        navigate("/auth/signup/complete");
      }
    } catch {
      navigate("/auth/signin");
    }
  } else {
    sessionStorage.setItem("termsAgreements", JSON.stringify(termsAgreements));
    navigate("/auth/signup/info");
  }
};

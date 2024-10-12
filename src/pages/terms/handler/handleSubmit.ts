import { signUpUser } from "@/pages/signUp/api/signUpUser";
import { checkRequiredTermsAgreed } from "../utils/termsHelper";
import { toast } from "react-toastify";
import { NavigateFunction } from "react-router-dom";

interface Token {
  accessToken: string;
  accessExpiredAt: string;
}

interface State {
  someData: string;
}

interface TermsChecked {
  [key: string]: boolean;
}

export const handleSubmit = async (
  isSocialLoginRedirect: boolean,
  state: State | null,
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

  if (isSocialLoginRedirect && state) {
    try {
      const { success, token }: { success: boolean; token: Token } = await signUpUser(true, state, termsAgreements);

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
    sessionStorage.setItem("termsAgreements", JSON.stringify(termsAgreements));
    navigate("/auth/signup/info");
  }
};

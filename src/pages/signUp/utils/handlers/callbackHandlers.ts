import { NavigateFunction } from "react-router-dom";
import { KakaoLoginParams, LoginCredentials } from "@/pages/signIn/hooks/useLogin";
import { toast } from "react-toastify";
import authAPI from "@/services/api/authAPI";

export const onSuccessCallback = (navigate: NavigateFunction) => {
  navigate("/auth/signup/complete");
};

export const onErrorCallback = () => {
  toast("회원가입 후 로그인에 실패했습니다. 잠시 후 다시 시도해주세요");
};

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  validity: ValidityType,
  formData: FormDataType,
  navigate: NavigateFunction,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  login: (variables: KakaoLoginParams | LoginCredentials) => void,
  isAgreedToTerms: TermAgreement[],
) => {
  e.preventDefault();

  const invalidFields = [];

  if (!validity.isEmailValid) invalidFields.push("이메일");
  if (!validity.isConfirmPasswordValid) invalidFields.push("비밀번호");
  if (!validity.isNicknameValid) invalidFields.push("닉네임");

  if (invalidFields.length > 0) {
    const errorMessage = `${invalidFields.join(", ")}을(를) 확인해주세요.`;
    toast.error(errorMessage);
  } else {
    setIsLoading(true);
    try {
      await authAPI.signUp({
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        nickname: formData.nickname,
        termsAgreements: isAgreedToTerms,
        provider: "EMAIL",
        providerId: null,
      });
      login({ email: formData.email, password: formData.password });
      onSuccessCallback(navigate);
    } catch {
      onErrorCallback();
    } finally {
      setIsLoading(false);
    }
  }
};

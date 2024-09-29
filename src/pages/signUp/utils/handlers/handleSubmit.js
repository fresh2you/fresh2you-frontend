import useLogin from "@/pages/signIn/hooks/useLogin";
import { signUpUser } from "../../api/signUpUser";
export const handleSubmit = async (
  e,
  validity,
  formData,
  navigate,
  setErrorModalMessage,
  handleOpenErrorModal,
  state,
  funnel,
  setFormData,
  setStatus,
  setValidity,
  setIsLoading,
  login,
) => {
  e.preventDefault();

  const invalidFields = [];

  if (!validity.isEmailValid) {
    invalidFields.push("이메일");
  }
  if (!validity.isPasswordCombinationValid || !validity.isConfirmPasswordValid) {
    invalidFields.push("비밀번호");
  }

  if (!validity.isNicknameValid) {
    invalidFields.push("닉네임");
  }

  if (invalidFields.length > 0) {
    const errorMessage = `${invalidFields.join(", ")}을(를) 확인해주세요.`;
    setErrorModalMessage(errorMessage);
    handleOpenErrorModal();
  } else {
    setIsLoading(true);
    try {
      await signUpUser(false, state, state.termsAgreements, formData);
      await login({ email: formData.email, password: formData.password });
    } catch (error) {
      console.error("회원가입 실패", error.response ? error.response.data : error);
    } finally {
      setIsLoading(false);
    }
  }
};

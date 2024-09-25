import useLogin from "@/pages/signIn/hooks/useLogin";
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
      const result = await signUpUser(false, state, termsAgreements, formData);
      if (result) {
        const onSuccessCallback = () => {
          navigate("/auth/signup/complete");
        };

        const onErrorCallback = (error) => {
          console.error("회원가입후 로그인 실패", error);
        };
        const mutation = useLogin(false, onSuccessCallback, onErrorCallback);
      }
    } catch {
      console.error("회원가입 실패");
    } finally {
      setIsLoading(false);
    }
  }
};

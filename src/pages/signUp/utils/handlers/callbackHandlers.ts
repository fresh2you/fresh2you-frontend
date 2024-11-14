import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

export const onSuccessCallback = (navigate: NavigateFunction) => {
  navigate("/auth/signup/complete");
};

export const onErrorCallback = () => {
  toast.error("회원가입 후 로그인에 실패했습니다. 잠시 후 다시 시도해주세요");
};

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  validity: ValidityType,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  signUp: () => void,
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
    signUp();
    setIsLoading(false);
  }
};

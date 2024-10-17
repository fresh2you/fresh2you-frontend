import { validatePassword } from "./passwordUtils";

export const validationLogic = {
  updateValidity: (status: StatusType, setValidity: React.Dispatch<React.SetStateAction<ValidityType>>) => {
    setValidity((preValidity) => ({
      ...preValidity,
      isEmailValid: status.emailStatus === "SUCCESS",
      isConfirmPasswordValid: status.passwordStatus === "SUCCESS",
      isNicknameValid: status.nicknameStatus === "SUCCESS",
    }));
  },

  getPasswordFeedbackMessages: (password: string) => {
    const feedbackMessages = [];
    if (password) {
      const passwordValidation = validatePassword(password);

      if (!passwordValidation.minLengthValid) feedbackMessages.push("최소 8자 이상");
      if (!passwordValidation.hasUpperCase) feedbackMessages.push("대문자");
      if (!passwordValidation.hasNumber) feedbackMessages.push("숫자");
      if (!passwordValidation.hasSpecialCharacter) feedbackMessages.push("특수문자");
    }
    return feedbackMessages.length > 0 ? `비밀번호 요구 사항: ${feedbackMessages.join(", ")}` : "";
  },
};

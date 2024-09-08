import { validatePassword } from './passwordUtils';

export const validationLogic = {
  updateValidity: (formData, status, setValidity, funnel) => {
    setValidity((preValidity) => ({
      ...preValidity,
      isEmailValid: status.emailStatus === 'SUCCESS' && !!formData.email,
      isPasswordCombinationValid: validatePassword(formData.password).isValid,
      isConfirmPasswordValid:
        status.passwordStatus === 'SUCCESS' &&
        !!formData.password &&
        !!formData.confirmPassword &&
        formData.confirmPassword === formData.password,
      isPhoneNoValid: status.requestStatus === '테스트' && !!formData.phoneNo,
      isNicknameValid: status.nicknameStatus === 'SUCCESS' && !!formData.nickname,
      isPhoneNoVerified: status.phoneNoStatus === 'SUCCESS' && !!formData.phoneNo,
    }));
  },

  getPasswordFeedbackMessages: (password) => {
    const feedbackMessages = [];
    if (password) {
      const passwordValidation = validatePassword(password);

      if (!passwordValidation.minLengthValid) feedbackMessages.push('비밀번호는 최소 8자 이상이어야 합니다.');
      if (!passwordValidation.hasUpperCase) feedbackMessages.push('비밀번호에 대문자를 포함해야 합니다.');
      if (!passwordValidation.hasNumber) feedbackMessages.push('비밀번호에 숫자를 포함해야 합니다.');
      if (!passwordValidation.hasSpecialCharacter) feedbackMessages.push('비밀번호에 특수문자를 포함해야 합니다.');
    }
    return feedbackMessages;
  },
};

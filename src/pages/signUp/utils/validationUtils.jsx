export const isNextButtonDisabled = (currentStep, validity) => {
  const conditions = {
    이메일입력: !validity.isEmailValid,
    비밀번호입력: !validity.isPasswordCombinationValid,
    비밀번호확인: !validity.isConfirmPasswordValid,
    전화번호입력: !validity.isPhoneNoVerified,
  };

  return conditions[currentStep] || false;
};

export const isFormValid = (validity) => {
  validity.isEmailValid &&
    validity.isPasswordCombinationValid &&
    validity.isConfirmPasswordValid &&
    validity.isPhoneNoVerified &&
    validity.isNicknameValid;
};

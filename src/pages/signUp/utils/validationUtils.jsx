export const isNextButtonDisabled = (currentStep, validity) => {
  const conditions = {
    이메일입력: validity.isEmailValid,
    비밀번호입력: validity.isPasswordCombinationValid,
    비밀번호확인: validity.isConfirmPasswordValid,
  };
  return conditions[currentStep];
  //return !conditions[currentStep];
};

export const isFormValid = (validity) => {
  return (
    validity.isEmailValid &&
    validity.isPasswordCombinationValid &&
    validity.isConfirmPasswordValid &&
    validity.isNicknameValid
  );
};

export const isFormValid = (validity: ValidityType): boolean => {
  return validity.isEmailValid && validity.isConfirmPasswordValid && validity.isNicknameValid;
};

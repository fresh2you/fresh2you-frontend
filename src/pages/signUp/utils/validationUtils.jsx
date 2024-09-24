export const isFormValid = (validity) => {
  return (
    validity.isEmailValid &&
    validity.isPasswordCombinationValid &&
    validity.isConfirmPasswordValid &&
    validity.isNicknameValid
  );
};

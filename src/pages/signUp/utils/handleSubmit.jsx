export const handleSubmit = (e, validity, formData) => {
  e.preventDefault();

  let errorMessage = '';

  if (!validity.isEmailValid) {
    errorMessage += '이메일이 유효하지 않습니다.\n';
  }
  if (!validity.isPasswordCombinationValid) {
    errorMessage += '비밀번호가 유효하지 않습니다. 대문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.\n';
  }
  if (!validity.isConfirmPasswordValid) {
    errorMessage += '비밀번호 확인이 일치하지 않습니다.\n';
  }
  if (!validity.isNicknameValid) {
    errorMessage += '닉네임이 유효하지 않습니다.\n';
  }

  if (errorMessage) {
    alert(errorMessage);
  } else {
    console.log('Form submitted:', formData.email, formData.password, formData.confirmPassword, formData.nickname);
  }
};

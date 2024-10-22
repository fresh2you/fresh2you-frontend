export const handleConfirmPasswordChange = (
  value: string,
  password: string,
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    confirmPassword: value,
  }));
  if (!validatePassword(password).isValid) return;
  setStatus((prevStatus) => {
    if (value !== password && !!password && !!value) {
      return { ...prevStatus, passwordStatus: "비밀번호가 일치하지 않습니다." };
    } else {
      return { ...prevStatus, passwordStatus: "SUCCESS" };
    }
  });
};

export const validatePassword = (password: string) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return {
    minLengthValid: password.length >= minLength,
    hasUpperCase: hasUpperCase,
    hasNumber: hasNumber,
    hasSpecialCharacter: hasSpecialCharacter,
    isValid: password.length >= minLength && hasUpperCase && hasNumber && hasSpecialCharacter,
  };
};

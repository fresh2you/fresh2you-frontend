import { handleConfirmPasswordChange } from '../passwordUtils';
export const createConfirmPwdFieldConfig = (formData, setFormData, setStatus) => {
  return {
    label: '비밀번호 확인',
    type: 'password',
    value: formData.confirmPassword,
    setValue: (value) => handleConfirmPasswordChange(value, formData.password, setFormData, setStatus),
    placeholder: '비밀번호를 다시 입력하세요',
    autoComplete: 'new-password',
  };
};

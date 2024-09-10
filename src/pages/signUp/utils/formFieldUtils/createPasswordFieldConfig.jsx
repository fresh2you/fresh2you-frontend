export const createPassWordFieldConfig = (formData, setFormData) => {
  return {
    label: '비밀번호',
    type: 'password',
    value: formData.password,
    setValue: (value) => setFormData((prevFormData) => ({ ...prevFormData, password: value })),
    placeholder: '대문자, 숫자, 특수문자를 포함하여 8자 이상',
    autoComplete: 'new-password',
  };
};

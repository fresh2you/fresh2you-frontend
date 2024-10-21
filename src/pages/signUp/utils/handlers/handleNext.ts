export const handleNext = (funnel: UseFunnelResults<SignUpStepContext>, formData: FormDataType) => {
  funnel.history.push("비밀번호입력", {
    email: formData.email,
    password: formData.password,
  });
};

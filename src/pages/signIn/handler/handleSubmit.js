export const handleSubmit = (formData, mutation, setError, setShake) => async (e) => {
  e.preventDefault();
  if (!formData.email || !formData.password) {
    setError("이메일과 비밀번호를 입력해주세요");
    setShake(true);
    setTimeout(() => setShake(false), 500);

    return;
  }
  mutation.mutate({ email: formData.email, password: formData.password });
};

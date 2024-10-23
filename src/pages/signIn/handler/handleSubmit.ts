interface FormData {
  email: string;
  password: string;
}

type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export const handleSubmit = (
  formData: FormData,
  setError: SetStateAction<string>,
  setShake: SetStateAction<boolean>,
  e: React.FormEvent<HTMLFormElement>,
  loginMutate: (variables: { email: string; password: string }) => void,
) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    setError("이메일과 비밀번호를 입력해주세요");
    setShake(true);
    setTimeout(() => setShake(false), 500);
    return;
  }

  loginMutate({ email: formData.email, password: formData.password });
};

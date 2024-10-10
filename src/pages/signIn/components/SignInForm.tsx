import { useState } from "react";
import "../../../styles/styles.css";
import { useNavigate } from "react-router-dom";
import { useFormHandlers } from "../handler/useFromHandlers";
import useLogin from "../hooks/useLogin";
import InputWithLabel from "@/components/InputWithLabel";
import { handleSubmit } from "../handler/handleSubmit";

interface FormData {
  email: string;
  password: string;
}

export default function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [shake, setShake] = useState<boolean>(false);
  const navigate = useNavigate();

  const { handleChange } = useFormHandlers({ formData, setFormData, setError });
  const { mutate: loginMutate } = useLogin(
    false,
    () => navigate("/"),
    () => {
      setError("이메일 또는 비밀번호가 일치하지 않습니다.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    },
  );

  return (
    <form
      onSubmit={(e) => handleSubmit(formData, setError, setShake, e, loginMutate)}
      className={`flex flex-col mt-2 w-full ${shake ? "shake" : ""}`}
    >
      <InputWithLabel
        id="email"
        label="이메일 주소"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="이메일을 입력하세요"
        autoComplete="on"
      />
      <InputWithLabel
        id="password"
        label="비밀번호"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호를 입력하세요"
        autoComplete="on"
        onButtonClick={() => document.querySelector<HTMLButtonElement>(".login-btn")?.click()}
      />

      {error && <p className="mt-2 font-semibold text-white">{error}</p>}

      <button type="submit" className="login-btn custom-focus">
        로그인
      </button>
    </form>
  );
}

import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import "../../../styles/styles.css";
import InputField from "./InputField";
import { login } from "../api/signIn";
export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (formData.email && formData.password) {
      setError("");
    }
  }, [formData.email, formData.password]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("로그인 성공:", data);
      window.location.href = "/";
    },
    onError: (error) => {
      console.error("로그인 실패:", error);
      setError("로그인에 실패했습니다.");
      setShake(true);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("이메일과 비밀번호를 입력해주세요");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    mutation.mutate({ email: formData.email, password: formData.password });
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col mt-2 ${shake ? "shake" : ""}`}>
      <InputField
        id="email"
        label="이메일 주소"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="이메일을 입력하세요"
        autoComplete="email"
      />
      <InputField
        id="password"
        label="비밀번호"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호를 입력하세요"
        autoComplete="current-password"
      />

      {error && <p className="mt-2 font-semibold text-white">{error}</p>}

      <button type="submit" className="login-btn custom-focus">
        로그인
      </button>
    </form>
  );
}

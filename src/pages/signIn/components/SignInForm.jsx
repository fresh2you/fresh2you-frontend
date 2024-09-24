import { useState, useEffect } from "react";
import "../../../styles/styles.css";
import InputField from "./InputField";
import useLogin from "../hooks/useLogin";
import { handleSubmit } from "../handler/handleSubmit";
import { useNavigate } from "react-router-dom";
export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.email || formData.password) {
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

  const onSuccessCallback = () => {
    navigate("/");
  };

  const onErrorCallback = (error) => {
    setError("이메일 또는 비밀번호가 일치하지 않습니다.");
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };
  const mutation = useLogin(false, onSuccessCallback, onErrorCallback);

  return (
    <form
      onSubmit={handleSubmit(formData, mutation, setError, setShake)}
      className={`flex flex-col mt-2 ${shake ? "shake" : ""}`}
    >
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

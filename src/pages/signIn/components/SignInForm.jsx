import { useState, useEffect } from 'react';
import { api2 } from '../../../services/api2';
import '../../../styles/styles.css';
import InputField from './InputField';

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (formData.email && formData.password) {
      setError('');
    }
  }, [formData.email, formData.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('이메일과 비밀번호를 입력해주세요');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const result = await api2.loginUser(formData);

    if (result.success) {
      localStorage.setItem('authToken', result.token);
      // 로그인 성공 후 추가 작업 (예: 페이지 리다이렉트)
    } else {
      setError(result.message);
      setShake(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col mt-2 ${shake ? 'shake' : ''}`}>
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

      {error && (
        <p className="mt-2 font-semibold" style={{ color: 'white' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        className="login-button mt-4 h-12 rounded-full font-semibold text-lg hover:border-transparent focus:outline-none"
      >
        로그인
      </button>
    </form>
  );
}

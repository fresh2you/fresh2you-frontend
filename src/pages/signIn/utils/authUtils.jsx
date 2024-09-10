import axios from 'axios';

export const handleLoginSubmit = async (e, formData, setError, setShake, api2) => {
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

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
  import.meta.env.VITE_KAKAO_API_KEY
}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_SIGNIN_REDIRECT_URI)}&response_type=code`;

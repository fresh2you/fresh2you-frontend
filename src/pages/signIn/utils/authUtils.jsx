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

const REST_API_KEY = ''; // 백엔드에서 제공받은 Kakao REST API 키
const REDIRECT_URI = ''; // 백엔드에서 제공받은 Redirect URI

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI,
)}&response_type=code`;

export const fetchToken = async () => {
  try {
    // URL에서 인가 코드 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // 백엔드에 코드를 전송하여 토큰을 요청
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/kakaoLogin`, { code });

      if (response.data) {
        // 토큰을 localStorage에 저장
        localStorage.setItem('authToken', response.data.token);

        // 로그인 성공 페이지로 리다이렉션
        return true;
      } else {
        console.error('백엔드에서 응답을 받지 못했습니다.');
        return false;
      }
    } else {
      console.error('URL에서 인가 코드를 찾을 수 없습니다.');
      return false;
    }
  } catch (error) {
    console.error('토큰 교환 중 오류 발생:', error);
    return false;
  }
};

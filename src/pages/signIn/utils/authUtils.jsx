export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
  import.meta.env.VITE_KAKAO_API_KEY
}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_SIGNIN_REDIRECT_URI)}&response_type=code`;

export const handleKakaoCallback = () => {
  const query = new URLSearchParams(window.location.search);
  const code = query.get("code");

  if (code) {
    return code;
  } else {
    return null;
  }
};

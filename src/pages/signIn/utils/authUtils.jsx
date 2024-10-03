const redirectUri =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_SIGNIN_REDIRECT_URI
    : import.meta.env.VITE_PROD_SIGNIN_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
  import.meta.env.VITE_KAKAO_API_KEY
}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_SIGNIN_REDIRECT_URI)}&response_type=code`;

export const handleKakaoCallback = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("code");
};

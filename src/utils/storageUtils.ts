interface TokenAndInfoProps {
  token: {
    accessToken: string;
    accessExpiredAt: string;
  };
  loginMember: {
    nickname: string;
    email: string;
    provider: "EMAIL" | "KAKAO" | "NAVER";
  };
}

export const setTokenAndInfo = ({ token, loginMember }: TokenAndInfoProps) => {
  const { accessToken, accessExpiredAt } = token;
  const { nickname, email, provider } = loginMember;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("accessExpiredAt", accessExpiredAt);
  localStorage.setItem("nickname", nickname);
  localStorage.setItem("email", email);
  localStorage.setItem("provider", provider);
};

export const getLocalStorageData = (key: string) => {
  // 추후에 데이터를 객체로 보관하면 사용

  return localStorage.getItem(key);
};

export const removeLocalStorage = () => {
  localStorage.clear();
};

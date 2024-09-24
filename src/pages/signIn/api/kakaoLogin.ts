import { instance } from "@/instance";

interface Token {
  accessToken: string;
  accessExpiredAt: string;
}

interface LoginMember {
  email: string;
  provider: string;
  providerId: string;
}

interface KakaoLoginResponse {
  success: boolean;
  code: string;
  message: string;
  data: {
    token: Token;
    loginMember: LoginMember;
    isSignup: boolean;
  };
}

type KakaoLoginResult = (LoginMember & { isSignup: false }) | { isSignup: true };

export const kakaoLogin = async (accessToken: string): Promise<KakaoLoginResult> => {
  const response = await instance.post<KakaoLoginResponse>("/members/login/kakao", { accessToken });

  if (response.data.success) {
    const { token, loginMember, isSignup } = response.data.data;

    if (isSignup) {
      localStorage.setItem("accessToken", token.accessToken);
      localStorage.setItem("accessExpiredAt", token.accessExpiredAt);
      localStorage.setItem("email", loginMember.email);
      localStorage.setItem("userId", loginMember.providerId);
      localStorage.setItem("provider", loginMember.provider);
      return { isSignup: isSignup };
    } else {
      return {
        email: loginMember.email,
        provider: loginMember.provider,
        providerId: loginMember.providerId,
        isSignup: isSignup,
      };
    }
  } else {
    throw new Error("카카오 로그인에 실패했습니다.");
  }
};

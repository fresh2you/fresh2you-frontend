import { instance } from "@/instance";

export const kakaoLogin = async (accessToken) => {
  const response = await instance.post("/members/login/kakao", accessToken);
  if (response.data.success) {
    const { token, loginMember, isSignup } = response.data.data;

    if (isSignup) {
      localStorage.setItem("accessToken", token.accessToken);
      localStorage.setItem("accessExpiredAt", token.accessExpiredAt);
      localStorage.setItem("email", loginMember.email);
      localStorage.setItem("providerId", loginMember.providerId);
      localStorage.setItem("provider", loginMember.provider);
      return { isSignup: isSignup };
    } else {
      return {
        email: loginMember.email,
        provider: loginMember.provider,
        providerId: loginMember.providerId,
        isSignup: isSignup,
        tempToken: token,
      };
    }
  } else {
    throw new Error("카카오 로그인에 실패했습니다.");
  }
};

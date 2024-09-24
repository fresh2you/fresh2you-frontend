import { instance } from "@/instance";
export const kakaoMockLogin = async ({ code, email, redirectUri, provider }) => {
  try {
    const response = await instance.get("/kakaoMembers"); //test라 get사용
    const member = response.data.find((member) => member.loginMember.email === email);

    if (member) {
      const { token, loginMember, isSignup } = member;
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
  } catch (error) {
    throw new Error("카카오 로그인 요청 중 오류가 발생했습니다.");
  }
};

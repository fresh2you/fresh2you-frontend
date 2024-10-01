import { api } from "@/services/api";

export const kakaoLogin = async (accessToken) => {
  try {
    const response = await api.auth.socialLogin(accessToken);

    if (response.success) {
      const { token, loginMember, isSignup } = response.data;

      if (isSignup && token) {
        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("accessExpiredAt", token.accessExpiredAt);

        return { isSignup };
      } else {
        return {
          loginMember,
          isSignup,
          token: null,
        };
      }
    }
  } catch (error) {
    throw new Error("카카오 로그인에 실패했습니다.");
  }
};

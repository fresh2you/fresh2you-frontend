import authAPI from "@/services/api/authAPI";
interface KakaoLoginParams {
  code: string;
  redirectUri: string;
  provider: "KAKAO";
}

export const kakaoLogin = async (accessToken: KakaoLoginParams): Promise<ISocialLoginResponse> => {
  try {
    const response = await authAPI.socialLogin(accessToken);
    const { token, loginMember, isSignup } = response.data;

    if (response.success) {
      localStorage.setItem("accessToken", token.accessToken);
      localStorage.setItem("accessExpiredAt", token.accessExpiredAt);
    }
    return {
      success: response.success,
      code: response.code,
      message: response.message,
      data: {
        token: token,
        loginMember: loginMember,
        isSignup: isSignup,
      },
    };
  } catch {
    throw new Error("카카오 로그인에 실패했습니다.");
  }
};

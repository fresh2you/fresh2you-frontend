import { api } from "@/services/api";

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<IEmailLoginResponse> => {
  try {
    const response = await api.auth.emailLogin({
      email: credentials.email,
      password: credentials.password,
    });
    const { token, loginMember } = response.data;
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
      },
    };
  } catch {
    throw new Error("로그인 정보가 일치하지 않습니다.");
  }
};

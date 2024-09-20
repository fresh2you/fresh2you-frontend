import { instance } from "@/instance";

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await instance.post("/auth/login", credentials);
    const { access_token, refresh_token } = response.data;

    // 로그인 성공 시 토큰을 localStorage에 저장
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    return response.data;
  } catch (error) {
    // 에러 처리
    console.error("로그인 실패:", error);
    throw error;
  }
};

import { api } from "@/services/api";

export const login = async (credentials) => {
  try {
    const { data: response } = await api.auth.emailLogin({
      email: credentials.email,
      password: credentials.password,
    });

    return response;
  } catch (error) {
    throw new Error("로그인 정보가 일치하지 않습니다.");
  }
};

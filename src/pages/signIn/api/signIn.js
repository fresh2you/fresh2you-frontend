import { instance } from "@/instance";

export const login = async (credentials) => {
  const response = await instance.post("/members/login", credentials);

  if (response.data.success) {
    const { accessToken, accessExpiredAt } = response.data.data.token;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("accessExpiredAt", accessExpiredAt);
  } else {
    throw new Error("로그인 정보가 일치하지 않습니다.");
  }
};

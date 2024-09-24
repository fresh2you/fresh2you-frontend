import { instance } from "@/instance";

interface LoginCredentials {
  email: string;
  password: string;
}

interface Member {
  providerId: string;
  email: string;
  password: string; // 테스트용
  nickname: string;
  provider: string;
  token: {
    accessToken: string;
    accessExpiredAt: string;
  };
}

export const login = async (credentials: LoginCredentials) => {
  const response = await instance.post("/members/login", credentials);

  if (response.data.success) {
    const { accessToken, accessExpiredAt } = response.data.data.token;
    const { providerId, nickname, provider } = response.data.data.loginMember;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("accessExpiredAt", accessExpiredAt);
    localStorage.setItem("providerId", providerId);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("provider", provider);
  } else {
    throw new Error("로그인 정보가 일치하지 않습니다.");
  }
};

export const mockLogin = async (credentials: LoginCredentials) => {
  const response = await instance.get("/members"); // test라 get사용
  const members = response.data;

  const member: Member = members.find(
    (member: Member) => member.email === credentials.email && member.password === credentials.password,
  );

  if (member) {
    const { accessToken, accessExpiredAt } = member.token;
    const { providerId, nickname, provider } = member;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("accessExpiredAt", accessExpiredAt);
    localStorage.setItem("providerId", providerId);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("provider", provider);

    return member;
  } else {
    throw new Error("로그인 정보가 일치하지 않습니다.");
  }
};

import { instance } from "@/instance";

const authAPI = {
  signUp: async ({
    email,
    password,
    confirmPassword,
    nickname,
    termsAgreements,
    provider,
    providerId,
  }: ISignUpRequest) => {
    const { data: response } = await instance.post<ISignUpResponse>("/members/signup", {
      email,
      password: password,
      confirmPassword: confirmPassword,
      nickname,
      termsAgreements,
      provider,
      providerId: providerId,
    });

    return response;
  },

  emailLogin: async ({ email, password }: { email: string; password: string }) => {
    const { data: response } = await instance.post("/members/login", {
      email,
      password,
    });

    return response;
  },

  socialLogin: async ({
    code,
    redirectUri,
    provider,
  }: {
    code: string;
    redirectUri: string;
    provider: "KAKAO" | "NAVER";
  }) => {
    const { data: response } = await instance.post("/members/login/kakao", {
      code,
      redirectUri,
      provider,
    });

    return response;
  },

  validateNickname: async (nickname: string) => {
    const { data: response } = await instance.get("/members/check-nickname", {
      params: {
        nickname,
      },
    });

    return response;
  },

  validateEmail: async (email: string) => {
    const { data: response } = await instance.get("/members/check-email", {
      params: {
        email,
      },
    });
    return response;
  },

  requestEmailCode: async (email: string) => {
    const { data: response } = await instance.post("/auth/email", null, {
      params: {
        email,
      },
    });

    return response;
  },

  verifyEmailCode: async ({ email, verificationCode }: { email: string; verificationCode: string }) => {
    const { data: response } = await instance.post("/auth/email/verify", null, {
      params: {
        email,
        verificationCode,
      },
    });

    return response;
  },

  withdrawAccount: async () => {
    const { data: response } = await instance.delete("/members/withdraw");

    return response;
  },
};

export default authAPI;

import { instance } from "@/instance";

export const sendEmailVerificationCode = async (email: string): Promise<boolean> => {
  try {
    const verifyResponse = await instance.get(`/auth/email`, {
      params: { email },
    });

    return verifyResponse.data.success;
  } catch {
    throw new Error("Failed to send email verification code");
  }
};

export const checkEmailDuplicate = async (email: string): Promise<boolean> => {
  try {
    const response = await instance.get("/members/check-email", {
      params: { email },
    });

    return !response.data.success;
  } catch {
    throw new Error("Email duplication check failed");
  }
};

export const verifyEmailCode = async (email: string, verificationCode: string): Promise<boolean> => {
  try {
    const response = await instance.get("/auth/email/certificate", {
      params: {
        email,
        verificationCode,
      },
    });

    return response.data.success;
  } catch {
    throw new Error("Email code verification failed");
  }
};

export const checkNicknameDuplicate = async (nickname: string): Promise<boolean> => {
  try {
    const response = await instance.get("/members/check-nickname", {
      params: { nickname },
    });

    return !response.data.success;
  } catch {
    throw new Error("Nickname duplication check failed");
  }
};

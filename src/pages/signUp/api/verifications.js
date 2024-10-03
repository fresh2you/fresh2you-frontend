import { instance } from "@/instance";
export const sendEmailVerificationCode = async (userEmail) => {
  try {
    const verifyResponse = await instance.post(`/auth/email`, null, {
      params: {
        email: userEmail,
      },
    });
    return verifyResponse.data;
  } catch (error) {
    throw error;
  }
};

export const checkEmailDuplicate = async (email) => {
  try {
    const response = await instance.get("/members/check-email", {
      params: { email },
    });
    return response.data.success;
  } catch {
    throw new Error("Email duplication check failed");
  }
};

export const verifyEmailCode = async (email, verificationCode) => {
  try {
    const response = await instance.post("/auth/email/verify", null, {
      params: {
        email: email,
        verificationCode: verificationCode,
      },
    });
    return response.data.success;
  } catch (error) {
    return error;
  }
};
export const checkNicknameDuplicate = async (nickname) => {
  try {
    const response = await instance.get("/members/check-nickname", {
      params: { nickname },
    });

    return response.data.success;
  } catch {
    throw new Error("Nickname duplication check failed");
  }
};

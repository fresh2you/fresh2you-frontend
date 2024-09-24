import { instance } from "@/instance";

export const signUpUser = async (isSocialLoginRedirect, state, termsAgreements, formData) => {
  let payload;
  if (isSocialLoginRedirect) {
    payload = {
      email: state.email,
      termsAgreements: termsAgreements,
      provider: state.provider,
      providerId: state.providerId,
    };
  } else {
    payload = {
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      nickname: formData.nickname,
      termsAgreements: termsAgreements,
      provider: "EMAIL",
    };
  }
  try {
    const response = await instance.post("/memebrs/signup", payload);
    return response.data.success;
  } catch (error) {
    throw error;
  }
};

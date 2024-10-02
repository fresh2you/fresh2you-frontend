import { instance } from "@/instance";

export const signUpUser = async (isSocialLoginRedirect, state, termsAgreements, formData) => {
  let payload;
  console.log("isSocialLoginRedirect", isSocialLoginRedirect);
  if (isSocialLoginRedirect) {
    payload = {
      email: state.email,
      nickname: state.nickname,
      termsAgreements: termsAgreements,
      provider: state.provider,
      providerId: state.providerId,
      password: null,
      confirmPassword: null,
    };
  } else {
    payload = {
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      nickname: formData.nickname,
      termsAgreements: termsAgreements,
      provider: "EMAIL",
      providerId: null,
    };
  }
  try {
    const { data: response } = await instance.post("/members/signup", payload);

    return { success: response.success, token: response.data.token };
  } catch (error) {
    throw error;
  }
};

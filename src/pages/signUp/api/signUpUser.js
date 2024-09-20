import { instance } from "@/instance";

export const signUpUser = async (formData) => {
  try {
    const response = await instance.post("/members/signup", formData);
    return response.data;
  } catch {
    throw error;
  }
};

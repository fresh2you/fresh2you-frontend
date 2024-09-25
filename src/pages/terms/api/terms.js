import { instance } from "@/instance";

export const fetchTerms = async () => {
  try {
    const response = await instance.get("/terms");
    return response.data;
  } catch (error) {
    console.error("약관 데이터 호출 실패:", error);
    throw error;
  }
};

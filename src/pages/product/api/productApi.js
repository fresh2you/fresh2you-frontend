import { instance } from "@/instance";
const token = localStorage.getItem("accessToken");
export const fetchCategories = async () => {
  try {
    const response = await instance.get("/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

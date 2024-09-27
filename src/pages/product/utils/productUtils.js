import { fetchCategories } from "../api/productApi";
export const getCategories = async () => {
  try {
    const categories = await fetchCategories();
    return categories;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }
};

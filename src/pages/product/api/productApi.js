import { instance } from "@/instance";
import axios from "axios";
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

export const fetchProducts = async (categoryId, keyword, pageNumber = 0, itemsPerPage = 3) => {
  try {
    const params = {
      page: pageNumber,
      size: itemsPerPage,
    };

    if (categoryId) {
      params.categoryId = categoryId;
    }

    if (keyword) {
      params.keyword = keyword;
    }

    const response = await instance.get("/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

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

export const fetchProducts = async (categoryId = "", keyword = "", pageNumber = 0, itemsPerPage = 3) => {
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

    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await instance.get(`/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { productId },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const buyProduct = async (productId, quantity, deliveryAddressId) => {
  try {
    const response = await instance.post(
      `/products/${productId}/buy`,
      {
        deliveryAddressId: deliveryAddressId,
        quantity: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDeliveryAddresses = async (userId) => {
  try {
    const { data: response } = await instance.get(`/members/delivery-addresses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching delivery addresses:", error);
    throw error;
  }
};
export const registerProduct = async (productData, img) => {
  const formData = new FormData();
  formData.append("file", img);
  formData.append("request", new Blob([JSON.stringify(productData)], { type: "application/json" }));

  try {
    const response = await instance.post("/products", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

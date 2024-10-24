import { instance } from "@/instance";
const token = localStorage.getItem("accessToken");

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
    return response.data;
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
  formData.append("image", img);
  formData.append("request", JSON.stringify(productData));

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

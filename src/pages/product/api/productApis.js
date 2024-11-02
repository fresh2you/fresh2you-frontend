import { instance } from "@/instance";
const token = localStorage.getItem("accessToken");

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

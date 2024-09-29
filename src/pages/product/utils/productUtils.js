import { fetchCategories } from "../api/productApis";
import { buyProduct } from "../api/productApis";
import { toast } from "react-toastify";
export const getCategories = async () => {
  try {
    const categories = await fetchCategories();
    return categories;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }
};

export const handlePurchase = async (recipientDetails, quantity, productId, navigate) => {
  const { recipientName, phoneNumber, addressId, address } = recipientDetails;

  if (!recipientName || !phoneNumber || !address) {
    toast.error("모든 필드를 입력해 주세요.");
    return;
  }

  const purchaseData = {
    deliveryAddressId: addressId,
    quantity: quantity,
  };

  try {
    await buyProduct(productId, purchaseData.quantity, purchaseData.deliveryAddressId);
    navigate("/purchase/complete");
  } catch (error) {
    console.error("구매 실패:", error);
    toast.error("결제 도중 오류가 발생했습니다.");
  }
};
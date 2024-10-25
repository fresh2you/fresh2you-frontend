import { buyProduct } from "../api/productApis";
import { toast } from "react-toastify";

export const handlePurchase = async (recipientDetails, quantity, productId, navigate, product) => {
  const { recipientName, phoneNumber, addressId, address } = recipientDetails;

  if (!recipientName || !phoneNumber || !address) {
    toast.error("모든 필드를 입력해 주세요.");
    return;
  }
  try {
    const response = await buyProduct(productId, quantity, addressId);
    if (response.success) {
      navigate("/purchase/complete", {
        state: {
          product: {
            id: productId,
            name: product.productName,
            img: product.imageUrl,
            price: product.price,
            seller: product.sellerName,
          },
          quantity: quantity,
        },
      });
    }
  } catch (error) {
    setLoading(false);
    if (error.response) {
      const errorCode = error.response.data.code;
      if (errorCode === "2101") {
        toast.error("포인트 잔액이 부족합니다.");
        return;
      }
      toast.error("결제 도중 오류가 발생했습니다.");
    } else {
      toast.error("결제 도중 오류가 발생했습니다.");
    }
  }
};

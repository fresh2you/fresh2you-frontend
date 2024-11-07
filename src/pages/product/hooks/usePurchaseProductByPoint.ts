import { useMutation } from "@tanstack/react-query";
import productAPI from "@/services/api/productAPI";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

interface purchaseParams {
  recipientDetails: PurchaseFormDataType;
  quantity: number;
  productId: string | undefined;
  product: IProductList;
  navigate: NavigateFunction;
}

export const usePurchaseProductByPoint = () => {
  return useMutation({
    mutationFn: async ({ recipientDetails, quantity, productId, product, navigate }: purchaseParams) => {
      const { data: result } = await productAPI.purchaseProduct({
        productId: Number(productId),
        deliveryAddressId: recipientDetails.addressId,
        quantity,
      });
      return { result, productId, product, quantity, navigate };
    },
    onSuccess: (variables) => {
      const { product, quantity, navigate } = variables;
      const amount = product.price * quantity;
      const queryString = new URLSearchParams({
        "product[productName]": product.productName,
        "product[imageUrl]": product.imageUrl,
        "product[price]": String(product.price),
        "product[sellerName]": product.sellerName,
        "product[quantity]": String(quantity),
        amount: String(amount),
      }).toString();
      navigate(`/purchase/complete?${queryString}`);
    },
    onError: (error: ApiError) => {
      const errorCode = error?.response?.data?.code;
      if (errorCode === "2101") {
        toast.error("포인트 잔액이 부족해요");
      } else {
        toast.error("결제 도중 오류가 발생했어요.");
      }
    },
  });
};

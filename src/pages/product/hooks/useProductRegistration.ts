import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import productAPI from "@/services/api/productAPI";

const useProductRegistration = (onSuccess: (productId: number) => void) => {
  return useMutation<number, Error, ProductDataType>({
    mutationFn: async (productData: ProductDataType) => {
      const rawPrice = productData.price.replace(/,/g, "");
      const rawQuantity = productData.quantity.replace(/,/g, "");

      const productPayload = {
        name: productData.name,
        price: rawPrice,
        description: productData.description,
        categoryId: productData.categoryId,
        quantity: rawQuantity,
        image: productData.image,
      };

      const response = await productAPI.postProduct(productPayload);
      return response.data.id;
    },
    onSuccess: (productId: number) => {
      onSuccess(productId);
    },
    onError: () => {
      toast.error("상품 등록에 실패했습니다. 다시 시도해주세요.");
    },
  });
};

export default useProductRegistration;

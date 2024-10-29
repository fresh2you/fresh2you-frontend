import { toast } from "react-toastify";
import { NavigateFunction } from "react-router-dom";
import productAPI from "@/services/api/productAPI";

interface HandleRegistrationSubmitParams {
  e: React.FormEvent<HTMLFormElement>;
  productData: ProductDataType;
  navigate: NavigateFunction;
  isFormValid: boolean;
}

const handleRegistrationSubmit = async ({ e, productData, navigate, isFormValid }: HandleRegistrationSubmitParams) => {
  e.preventDefault();
  const rawPrice = productData.price.replace(/,/g, "");
  const rawQuantity = productData.quantity.replace(/,/g, "");

  if (Number(rawQuantity) < 1) {
    toast.error("수량은 1개 이상이어야 합니다.");
    return;
  }
  if (!productData.image) {
    toast.error("최소 이미지 한 장을 등록해주세요.");
    return;
  }

  if (isFormValid) {
    try {
      const productPayload = {
        name: productData.name,
        price: rawPrice,
        description: productData.description,
        categoryId: productData.categoryId,
        quantity: rawQuantity,
        image: productData.image,
      };
      const response = await productAPI.postProduct(productPayload);
      navigate(`/product/${response.data.id}`);
    } catch {
      toast.error("상품 등록에 실패했습니다. 다시 시도해주세요.");
    }
  } else {
    toast.error("모든 필드를 올바르게 입력했는지 확인해주세요.");
  }
};

export default handleRegistrationSubmit;

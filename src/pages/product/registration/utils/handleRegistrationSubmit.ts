import { toast } from "react-toastify";

const handleRegistrationSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  isFormValid: boolean,
  productData: ProductDataType,
  registerProduct: (productData: ProductDataType) => Promise<number>,
) => {
  e.preventDefault();

  if (isFormValid) {
    registerProduct(productData);
  } else {
    const rawQuantity = productData.quantity.replace(/,/g, "");
    if (Number(rawQuantity) < 1) {
      toast.error("수량은 1개 이상이어야 해요");
      return;
    }

    if (!productData.image) {
      toast.error("최소 이미지 한 장을 등록해주세요.");
      return;
    }

    toast.error("모든 필드를 올바르게 입력했는지 확인해주세요.");
  }
};

export default handleRegistrationSubmit;

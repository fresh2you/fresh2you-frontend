import { toast } from "react-toastify";

export const handleQuantityChange = (
  newQuantity: number,
  setQuantity: React.Dispatch<React.SetStateAction<number>>,
) => {
  if (newQuantity < 1) return;
  setQuantity(newQuantity);
};

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setRecipientDetails: React.Dispatch<React.SetStateAction<PurchaseFormDataType>>,
) => {
  const { id, value } = e.target;
  setRecipientDetails((prevDetails) => ({
    ...prevDetails,
    [id]: value,
  }));
};

export const handleAddressSelect = (
  address: Address,
  setRecipientDetails: React.Dispatch<React.SetStateAction<PurchaseFormDataType>>,
) => {
  setRecipientDetails({
    recipientName: address.recipientName,
    phoneNumber: address.phoneNumber,
    addressId: Number(address.deliveryAddressId),
    address: address.address,
    detailedAddress: address.detailedAddress,
    postalCode: address.postalCode,
  });
};

export const toggleModal = (setModalOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  setModalOpen((prev) => !prev);
};

export const validatePurchaseData = (
  recipientDetails: PurchaseFormDataType,
  quantity: number,
  productQuantity: number,
  minQuantity = 1,
): boolean => {
  const { recipientName, phoneNumber, address } = recipientDetails;

  if (!quantity || quantity < minQuantity) {
    toast.error(`수량은 ${minQuantity}개 이상이어야 해요.`);
    return false;
  }

  if (quantity > productQuantity) {
    toast.error("재고 수량을 초과하여 구매할 수 없어요.");
    return false;
  }

  if (!recipientName || !phoneNumber || !address) {
    toast.error("모든 필드를 입력해 주세요.");
    return false;
  }

  return true;
};

export const resetPurchaseState = (
  setQuantity: React.Dispatch<React.SetStateAction<number>>,
  setRecipientDetails: React.Dispatch<React.SetStateAction<PurchaseFormDataType>>,
) => {
  setQuantity(1);
  setRecipientDetails({
    recipientName: "",
    phoneNumber: "",
    addressId: 0,
    address: "",
    detailedAddress: "",
    postalCode: "",
  });
};

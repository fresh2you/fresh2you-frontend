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

export const validatePurchaseData = (recipientDetails: PurchaseFormDataType, quantity: number): boolean => {
  const { recipientName, phoneNumber, address } = recipientDetails;

  if (!quantity || quantity < 1) {
    toast.error("수량은 1개 이상이어야 합니다.");
    return false;
  }

  if (!recipientName || !phoneNumber || !address) {
    toast.error("모든 필드를 입력해 주세요.");
    return false;
  }

  return true;
};

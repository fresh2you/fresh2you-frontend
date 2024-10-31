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
    addressId: address.deliveryAddressId,
    address: address.address,
    detailedAddress: address.detailedAddress,
    postalCode: address.postalCode,
  });
};

export const toggleModal = (setModalOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  setModalOpen((prev) => !prev);
};

import { useState } from "react";
import Button from "../buttons/Button";
import InputField from "./InputField";
import { fetchDeliveryAddresses } from "../../api/productApis";
import AddressModal from "./AddressModal";
import TextInput from "./TextInput";
const PurchaseForm = ({ recipientDetails, setRecipientDetails, addressList }) => {
  const [showAddressList, setShowAddressList] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddressSelect = (address) => {
    setRecipientDetails((prevDetails) => ({
      recipientName: address.recipientName,
      phoneNumber: address.phoneNumber,
      addressId: address.deliveryAddressId,
      address: address.address,
      detailedAddress: address.detailedAddress,
      postalCode: address.postalCode,
    }));
  };

  const openPostcode = () => {
    setShowAddressList(true);
  };

  const closePostcode = () => {
    setShowAddressList(false);
  };

  console.log(2, recipientDetails);

  return (
    <div className="flex flex-col w-full gap-4 mobile:mt-4 tablet:mt-6">
      <InputField
        label="받는 사람"
        name="recipientName"
        value={recipientDetails.recipientName}
        onChange={handleChange}
      />

      <InputField
        label="전화번호"
        name="phoneNumber"
        value={recipientDetails.phoneNumber}
        onChange={handleChange}
        type="tel"
      />

      <div className="flex items-center gap-4">
        <label className="block font-semibold text-custom-p">배송지 주소</label>
        <Button
          onClick={() => openPostcode()}
          className="px-2 py-2 text-xs text-white bg-custom-green hover:bg-custom-green-hover"
          text="내 배송지 목록"
        />
      </div>

      <div className="flex flex-col w-4/5 gap-2">
        <TextInput
          value={recipientDetails.address}
          onChange={handleChange}
          type="text"
          name="address"
          readOnly={true}
        />
        <TextInput
          value={recipientDetails.detailedAddress}
          onChange={handleChange}
          type="text"
          name="detailedAddress"
          readOnly={true}
        />
      </div>

      <AddressModal
        isOpen={showAddressList}
        onClose={closePostcode}
        addressList={addressList}
        onSelect={handleAddressSelect}
      />
    </div>
  );
};
export default PurchaseForm;

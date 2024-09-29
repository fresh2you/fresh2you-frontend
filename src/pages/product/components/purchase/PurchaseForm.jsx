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
      ...prevDetails,
      address: address.address,
      addressId: address.deliveryAddressId,
      detailedAddress: address.detailedAddress,
    }));
  };

  const openPostcode = () => {
    setShowAddressList(true);
  };

  const closePostcode = () => {
    setShowAddressList(false);
  };

  return (
    <div className="mobile:mt-4 w-full tablet:mt-6">
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

      <label className="block text-custom-p font-semibold">배송지 주소</label>
      <div className="flex flex-row items-center w-full mb-2">
        <InputField name="address" value={recipientDetails.address} onChange={handleChange} readOnly={true} />
        <Button
          onClick={() => openPostcode()}
          className="bg-custom-green text-white hover:bg-custom-green-hover ml-2 mt-2"
          text="내 주소 목록"
        />
      </div>
      <TextInput
        value={recipientDetails.detailedAddress}
        onChange={handleChange}
        type="text"
        name="detailedAddress"
        readOnly={true}
      />
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

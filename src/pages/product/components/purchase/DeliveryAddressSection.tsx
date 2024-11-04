import Button from "../buttons/Button";
import TextInput from "./TextInput";
import { handleChange, toggleModal } from "../../utils/purchaseHandlers";
import { useAtom } from "jotai";
import { recipientDetailsAtom } from "../../atom/atom";
import { useState } from "react";
import AddressModal from "./AddressModal";

const DeliveryAddressSection = () => {
  const [recipientDetails, setRecipientDetails] = useAtom(recipientDetailsAtom);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section>
      <div className="flex items-center gap-4 mb-1.5">
        <label className="block font-semibold text-custom-input">배송지 주소</label>
        <Button
          onClick={() => toggleModal(setModalOpen)}
          className="text-custom-black bg-custom-gray-light hover:bg-custom-gray-dark hover:text-white"
          text="내 배송지 목록"
        />
      </div>
      <div className="flex flex-col w-11/12 max-w-[350px] gap-2">
        <TextInput
          value={recipientDetails.address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setRecipientDetails)}
          name="address"
          readOnly={true}
        />
        <TextInput
          value={recipientDetails.detailedAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setRecipientDetails)}
          name="detailedAddress"
          readOnly={true}
        />
      </div>
      {isModalOpen && <AddressModal isOpen={isModalOpen} unmount={() => toggleModal(setModalOpen)} />}
    </section>
  );
};

export default DeliveryAddressSection;

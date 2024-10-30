import AddressModal from "./AddressModal";
import { recipientDetailsAtom } from "../../atom/atom";
import { useAtom } from "jotai";
import { addressHandlers } from "../../utils/purchaseHandlers";
import InputWithLabel from "@/components/InputWithLabel";
import { useState } from "react";
import DeliveryAddressSection from "./DeliveryAddressSection";

const PurchaseForm = () => {
  const [showAddressList, setShowAddressList] = useState(false);
  const [recipientDetails, setRecipientDetails] = useAtom(recipientDetailsAtom);

  return (
    <div className="flex flex-col w-11/12 mt-2.5 gap-1">
      <InputWithLabel
        label="받는 사람"
        id="recipientName"
        value={recipientDetails.recipientName}
        onChange={(e) => addressHandlers.handleChange(e, setRecipientDetails)}
        className="max-w-[180px]"
      />
      <InputWithLabel
        label="전화번호"
        id="phoneNumber"
        value={recipientDetails.phoneNumber}
        onChange={(e) => addressHandlers.handleChange(e, setRecipientDetails)}
        type="tel"
        className="max-w-[180px]"
      />
      <DeliveryAddressSection setShowAddressList={setShowAddressList} />
      <AddressModal isOpen={showAddressList} setShowAddressList={setShowAddressList} />
    </div>
  );
};
export default PurchaseForm;

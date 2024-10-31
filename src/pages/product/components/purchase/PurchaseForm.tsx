import { recipientDetailsAtom } from "../../atom/atom";
import { useAtom } from "jotai";
import { handleChange } from "../../utils/purchaseHandlers";
import InputWithLabel from "@/components/InputWithLabel";
import DeliveryAddressSection from "./DeliveryAddressSection";

const PurchaseForm = () => {
  const [recipientDetails, setRecipientDetails] = useAtom(recipientDetailsAtom);

  return (
    <div className="flex flex-col w-11/12 mt-2.5 gap-1 mb-2">
      <InputWithLabel
        label="받는 사람"
        id="recipientName"
        value={recipientDetails.recipientName}
        onChange={(e) => handleChange(e, setRecipientDetails)}
        className="max-w-[180px]"
      />
      <InputWithLabel
        label="전화번호"
        id="phoneNumber"
        value={recipientDetails.phoneNumber}
        onChange={(e) => handleChange(e, setRecipientDetails)}
        type="tel"
        className="max-w-[180px]"
      />
      <DeliveryAddressSection />
    </div>
  );
};
export default PurchaseForm;

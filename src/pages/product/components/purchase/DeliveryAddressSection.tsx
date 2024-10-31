import Button from "../buttons/Button";
import TextInput from "./TextInput";
import { addressHandlers } from "../../utils/purchaseHandlers";
import { useAtom } from "jotai";
import { recipientDetailsAtom } from "../../atom/atom";

interface DeliveryAddressSectionProps {
  setShowAddressList: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeliveryAddressSection: React.FC<DeliveryAddressSectionProps> = ({ setShowAddressList }) => {
  const [recipientDetails, setRecipientDetails] = useAtom(recipientDetailsAtom);
  return (
    <section>
      <div className="flex items-center gap-4 mb-1.5">
        <label className="block font-semibold text-custom-input">배송지 주소</label>
        <Button
          onClick={() => addressHandlers.handleOpenPostcode(setShowAddressList)}
          className="text-white bg-custom-green hover:bg-custom-green-hover"
          text="내 배송지 목록"
        />
      </div>
      <div className="flex flex-col w-11/12 max-w-[350px] gap-2">
        <TextInput
          value={recipientDetails.address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => addressHandlers.handleChange(e, setRecipientDetails)}
          name="address"
          readOnly={true}
        />
        <TextInput
          value={recipientDetails.detailedAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => addressHandlers.handleChange(e, setRecipientDetails)}
          name="detailedAddress"
          readOnly={true}
        />
      </div>
    </section>
  );
};

export default DeliveryAddressSection;

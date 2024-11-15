import TextInput from "./TextInput";
import { handleChange } from "../utils/purchaseHandlers";
import { useAtom } from "jotai";
import { recipientDetailsAtom } from "../../common/atom/atom";
import { toast } from "react-toastify";

const DeliveryAddressSection = () => {
  const [recipientDetails, setRecipientDetails] = useAtom(recipientDetailsAtom);

  return (
    <section>
      <label className="block font-semibold text-custom-input">배송지 주소</label>
      <div className="flex flex-col w-11/12 max-w-[350px] gap-2">
        <TextInput
          value={recipientDetails.address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setRecipientDetails)}
          name="address"
          readOnly={true}
          onClick={() => toast.error("수령인 목록에서 수령인 정보를 선택해주세요.")}
        />
        <TextInput
          value={recipientDetails.detailedAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setRecipientDetails)}
          name="detailedAddress"
          readOnly={true}
          onClick={() => toast.error("수령인 목록에서 수령인 정보를 선택해주세요.")}
        />
      </div>
    </section>
  );
};

export default DeliveryAddressSection;

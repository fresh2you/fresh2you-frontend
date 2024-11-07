import { recipientDetailsAtom } from "../../atom/atom";
import { useAtom } from "jotai";
import { handleChange } from "../../utils/purchaseHandlers";
import InputWithLabel from "@/components/InputWithLabel";
import DeliveryAddressSection from "./DeliveryAddressSection";
import Button from "../buttons/Button";
import { toggleModal } from "../../utils/purchaseHandlers";
import RecipientInfoModal from "./RecipientInfoModal";
import { useState } from "react";
import { toast } from "react-toastify";

const PurchaseForm = () => {
  const [recipientDetails, setRecipientDetails] = useAtom(recipientDetailsAtom);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full gap-1 mt-2.5 mb-2 tablet-sm:w-full">
      <Button
        onClick={() => toggleModal(setModalOpen)}
        className="mb-2.5 text-white bg-custom-green hover:bg-custom-green-hover hover:text-white self-start"
        text="수령인 목록 불러오기"
      />
      <div className=" tablet-sm:flex tablet:justify-between">
        <InputWithLabel
          label="받는 사람"
          id="recipientName"
          value={recipientDetails.recipientName}
          onChange={(e) => handleChange(e, setRecipientDetails)}
          className="max-w-[180px]"
          readOnly={true}
          placeholder="김프레시"
          onClick={() => toast.error("수령인 목록에서 수령인 정보를 선택해주세요.")}
        />
        <InputWithLabel
          label="전화번호"
          id="phoneNumber"
          value={recipientDetails.phoneNumber}
          onChange={(e) => handleChange(e, setRecipientDetails)}
          type="tel"
          className="max-w-[180px]"
          readOnly={true}
          placeholder="010xxxxxxxx"
          onClick={() => toast.error("수령인 목록에서 수령인 정보를 선택해주세요.")}
        />
      </div>
      <DeliveryAddressSection />
      {isModalOpen && <RecipientInfoModal isOpen={isModalOpen} unmount={() => toggleModal(setModalOpen)} />}
    </div>
  );
};
export default PurchaseForm;

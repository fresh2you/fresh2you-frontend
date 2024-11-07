import { addressListAtom, recipientDetailsAtom } from "../../atom/atom";
import { useAtom, useSetAtom } from "jotai";
import { CloseBtn } from "@/components/CloseBtn";
import useDefaultAddress from "../../hooks/useDefaultAddress";
import AddressList from "./AddressList";
import DeliveryButton from "../buttons/DeliveryButton";

interface RecipientInfoModalProps {
  isOpen: boolean;
  unmount: () => void;
}

const RecipientInfoModal: React.FC<RecipientInfoModalProps> = ({ isOpen, unmount }) => {
  const setRecipientDetails = useSetAtom(recipientDetailsAtom);
  const [addressList, setAddressList] = useAtom(addressListAtom);
  const isError = useDefaultAddress(setRecipientDetails, setAddressList);
  if (!isOpen || isError) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md mobile:w-4/5 max-w-[380px] relative flex flex-col">
        <h2 className="mb-3 font-semibold text-custom-green text-custom-span">배송지를 선택해주세요</h2>
        <CloseBtn
          onClick={unmount}
          className="absolute p-0 bg-transparent text-custom-green right-4 top-3 hover:text-custom-green-hover"
        />
        <AddressList addresses={addressList} unmount={unmount} />
        {addressList.length > 0 ? (
          <DeliveryButton className="mt-3 mb-0 text-white bg-custom-green hover:bg-custom-green-hover" />
        ) : (
          <DeliveryButton />
        )}
      </div>
    </div>
  );
};

export default RecipientInfoModal;

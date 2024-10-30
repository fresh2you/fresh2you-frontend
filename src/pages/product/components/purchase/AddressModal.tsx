import { overlay } from "overlay-kit";
import Button from "../buttons/Button";
import AddDeliveryModal from "@/pages/mypage/deliveries/components/AddDeliveryModal";
import { addressListAtom, recipientDetailsAtom } from "../../atom/atom";
import { useAtom, useSetAtom } from "jotai";
import { addressHandlers } from "../../utils/purchaseHandlers";
import { CloseBtn } from "@/components/CloseBtn";
import useDefaultAddress from "../../hooks/useDefaultAddress";

interface AddressModalProps {
  isOpen: boolean;
  setShowAddressList: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressModal: React.FC<AddressModalProps> = ({ isOpen, setShowAddressList }) => {
  const setRecipientDetails = useSetAtom(recipientDetailsAtom);
  const [addressList, setAddressList] = useAtom(addressListAtom);
  useDefaultAddress(setRecipientDetails, setAddressList);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-custom-green p-4 rounded shadow-md mobile:w-4/5 max-w-[380px] relative">
        <h2 className="mb-3 font-semibold text-white text-custom-span">배송지를 선택해주세요</h2>
        <CloseBtn
          onClick={() => addressHandlers.handleClosePostcode(setShowAddressList)}
          className="absolute p-0 text-white bg-transparent right-4 top-3 hover:text-gary-200"
        />
        <ul className="p-1 bg-white rounded">
          {Array.isArray(addressList) && addressList.length > 0 ? (
            addressList.map((address, index) => (
              <li
                key={address.deliveryAddressId}
                className="p-2 transition-all cursor-pointer hover:bg-custom-green-100 text-custom-btn-text text-custom-dark"
                onClick={() => {
                  addressHandlers.handleAddressSelect(address, setRecipientDetails);
                  addressHandlers.handleClosePostcode(setShowAddressList);
                }}
              >
                <span className="font-semibold text-custom-green">주소 {index + 1}. </span>
                {address.address}
              </li>
            ))
          ) : (
            <li className="p-2 font-normal text-center text-custom-black">
              <p className="text-custom-sm-p">등록된 배송지가 없습니다</p>
              <Button
                text="배송지 등록하기"
                onClick={() =>
                  overlay.open(
                    ({ isOpen, unmount }) => {
                      return <AddDeliveryModal isOpen={isOpen} unmount={unmount} />;
                    },
                    { overlayId: "AddDeliveryModal" },
                  )
                }
                className="mt-4 text-white bg-custom-green hover:bg-custom-green-hover"
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AddressModal;

import { overlay } from "overlay-kit";
import Button from "../buttons/Button";
import AddDeliveryModal from "@/pages/mypage/deliveries/components/AddDeliveryModal";

const AddressModal = ({ isOpen, addressList, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-md mobile:w-4/5 max-w-[340px]">
        <h2 className="mb-4 font-semibold text-custom-p">배송지 목록</h2>
        <ul>
          {Array.isArray(addressList) && addressList.length > 0 ? (
            addressList.map((address) => (
              <li
                key={address.deliveryAddressId}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onSelect(address);
                  onClose();
                }}
              >
                {address.address}
              </li>
            ))
          ) : (
            <li className="p-2 font-normal text-center text-black">
              <div>등록된 배송지가 없습니다</div>
              <button
                className="mt-4 text-white transition-all bg-custom-gray-dark hover:bg-custom-green-hover"
                onClick={() =>
                  overlay.open(
                    ({ isOpen, unmount }) => {
                      return <AddDeliveryModal isOpen={isOpen} unmount={unmount} />;
                    },
                    { overlayId: "AddDeliveryModal" },
                  )
                }
              >
                배송지 등록하기
              </button>
            </li>
          )}
        </ul>
        <Button
          onClick={onClose}
          className="mt-4 text-black bg-custom-gray-light hover:bg-custom-green-hover"
          text="닫기"
        />
      </div>
    </div>
  );
};

export default AddressModal;

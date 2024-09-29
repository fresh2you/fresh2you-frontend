import Button from "../buttons/Button";
const AddressModal = ({ isOpen, onClose, addressList, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md mobile:w-4/5 max-w-[340px]">
        <h2 className="text-custom-p font-semibold mb-4">배송지 목록</h2>
        <ul>
          {Array.isArray(addressList) && addressList.length > 0 ? (
            addressList.map((address) => (
              <li
                key={address.deliveryAddressId}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onSelect(address);
                  onClose();
                }}
              >
                {address.address}
              </li>
            ))
          ) : (
            <li className="p-2 text-center text-gray-500">마이페이지에서 배송지를 등록해주세요.</li>
          )}
        </ul>
        <Button onClick={onClose} className="mt-4 bg-custom-green text-white hover:bg-custom-green-hover" text="닫기" />
      </div>
    </div>
  );
};

export default AddressModal;

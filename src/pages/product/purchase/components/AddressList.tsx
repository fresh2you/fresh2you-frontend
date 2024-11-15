import { handleAddressSelect } from "../utils/purchaseHandlers";
import { recipientDetailsAtom } from "../../common/atom/atom";
import { useAtom } from "jotai";

interface AddressListProps {
  addresses: Address[];
  unmount: (selectedDetails: PurchaseFormDataType) => void;
}

const AddressList: React.FC<AddressListProps> = ({ addresses, unmount }) => {
  const [recipientDetails, setRecipientDetails] = useAtom(recipientDetailsAtom);
  return (
    <ul className={`p-1 pb-0 bg-white rounded ${addresses.length > 0 && "flex flex-col items-center"} min-h-44`}>
      {addresses.length > 0 &&
        addresses.map((address, index) => (
          <li
            key={address.deliveryAddressId}
            className="w-full p-2 mb-2 transition-all border rounded cursor-pointer border-custom-green hover:bg-custom-green-100 text-custom-btn-text text-custom-dark"
            onClick={() => {
              handleAddressSelect(address, setRecipientDetails);
              unmount(recipientDetails);
            }}
          >
            <span className="font-semibold text-custom-green">주소 {index + 1}. </span>
            {address.address}
          </li>
        ))}
    </ul>
  );
};

export default AddressList;

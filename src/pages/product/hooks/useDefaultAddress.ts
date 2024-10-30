import { useEffect } from "react";
import { fetchDeliveryAddresses } from "../api/productApis";

type setRecipientDetails = React.Dispatch<React.SetStateAction<PurchaseFormDataType>>;
type SetAddressList = (addresses: Address[]) => void;

const useDefaultAddress = (setRecipientDetails: setRecipientDetails, setAddressList: SetAddressList) => {
  useEffect(() => {
    const fetchDefaultAddress = async () => {
      try {
        const { addressList: addresses }: { addressList: Address[] } = await fetchDeliveryAddresses();

        if (addresses && addresses.length > 0) {
          const defaultAddress = addresses.find((address) => address.isDefault);
          setAddressList(addresses);
          if (defaultAddress) {
            setRecipientDetails({
              recipientName: defaultAddress.recipientName,
              phoneNumber: defaultAddress.phoneNumber,
              addressId: defaultAddress.deliveryAddressId,
              address: defaultAddress.address,
              detailedAddress: defaultAddress.detailedAddress,
              postalCode: defaultAddress.postalCode,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching default address:", error);
      }
    };

    fetchDefaultAddress();
  }, [setRecipientDetails, setAddressList]);
};

export default useDefaultAddress;

import { useEffect } from "react";
import { fetchDeliveryAddresses } from "../api/productApis";

const useDefaultAddress = (setRecipientDetails, setAddressList) => {
  useEffect(() => {
    const fetchDefaultAddress = async () => {
      try {
        const addresses = await fetchDeliveryAddresses();
        if (addresses && addresses.length > 0) {
          const defaultAddress = addresses.find((address) => address.isDefault);
          setAddressList(addresses);
          if (defaultAddress) {
            setRecipientDetails({
              recipientName: defaultAddress.recipientName,
              phoneNumber: "",
              addressId: defaultAddress.deliveryAddressId,
              address: `${defaultAddress.address} ${defaultAddress.detailedAddress}`,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching default address:", error);
      }
    };

    fetchDefaultAddress();
  }, []);
};

export default useDefaultAddress;

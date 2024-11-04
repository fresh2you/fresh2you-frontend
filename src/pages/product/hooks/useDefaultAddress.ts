import userAPI from "@/services/api/userAPI";
import { useQuery } from "@tanstack/react-query";

type SetRecipientDetails = React.Dispatch<React.SetStateAction<PurchaseFormDataType>>;
type SetAddressList = (addresses: Address[]) => void;

const useDefaultAddress = (setRecipientDetails: SetRecipientDetails, setAddressList: SetAddressList) => {
  const { data: deliveries, isError } = useQuery({
    queryKey: ["deliveries"],
    queryFn: async () => {
      const { data: result } = await userAPI.getDeliveries();
      return result.addressList as Address[];
    },
    staleTime: 60 * 1000,
    retry: 0,
  });

  if (deliveries) {
    setAddressList(deliveries);
    const defaultAddress = deliveries.find((address: Address) => address.isDefault);
    if (defaultAddress) {
      setRecipientDetails({
        recipientName: defaultAddress.recipientName,
        phoneNumber: defaultAddress.phoneNumber,
        addressId: Number(defaultAddress.deliveryAddressId),
        address: defaultAddress.address,
        detailedAddress: defaultAddress.detailedAddress,
        postalCode: defaultAddress.postalCode,
      });
    }
  }
  return isError;
};

export default useDefaultAddress;

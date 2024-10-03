import { useQuery } from "@tanstack/react-query";
import { overlay } from "overlay-kit";
import AddDeliveryModal from "@/pages/mypage/deliveries/components/AddDeliveryModal";
import { api } from "@/services/api";

type DeliveryTypes = {
  deliveryAddressId: number;
  name: string;
  phone: string;
  address: string;
  detailedAddress: string;
  recipientName: string;
  postalCode: `${number}`;
};

const useDeliveriesPageLogics = () => {
  const openAddDeliveryModal = () => {
    overlay.open(
      ({ isOpen, unmount }) => {
        return <AddDeliveryModal isOpen={isOpen} unmount={unmount} />;
      },
      { overlayId: "AddDeliveryModal" },
    );
  };

  const { data: deliveries } = useQuery({
    queryKey: ["deliveries"],
    queryFn: async () => {
      const { data: result } = await api.user.getDeliveries();

      return result.addressList as DeliveryTypes[];
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  return { deliveries, openAddDeliveryModal };
};

export default useDeliveriesPageLogics;

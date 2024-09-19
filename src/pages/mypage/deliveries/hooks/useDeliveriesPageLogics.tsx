import { useQuery } from "@tanstack/react-query";
import { instance } from "@/instance";
import { overlay } from "overlay-kit";
import AddDeliveryModal from "@/pages/mypage/deliveries/components/AddDeliveryModal";

type DeliveryTypes = {
  id: number;
  name: string;
  phone: string;
  address: string;
  recipient: string;
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
      const { data: result } = await instance.get("/deliveries");

      return result as DeliveryTypes[];
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  return { deliveries, openAddDeliveryModal };
};

export default useDeliveriesPageLogics;

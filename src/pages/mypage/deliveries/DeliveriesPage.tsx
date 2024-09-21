import { myPageHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import useDeliveriesPageLogics from "@/pages/mypage/deliveries/hooks/useDeliveriesPageLogics";
import DeliveryBox from "@/pages/mypage/deliveries/components/DeliveryBox";

const DeliveriesPage = () => {
  const setHeaderProps = useSetAtom(myPageHeaderProps);
  const { deliveries, openAddDeliveryModal } = useDeliveriesPageLogics();

  console.log(deliveries);

  useEffect(() => {
    setHeaderProps({
      title: "배송지 관리",
      hasConfirm: true,
      confirmText: "배송지 추가",
      onConfirm: openAddDeliveryModal,
    });
  }, [setHeaderProps, openAddDeliveryModal]);

  return (
    <div className="flex flex-col w-full h-full gap-4 p-4 overflow-y-scroll">
      {deliveries?.map((delivery) => (
        <DeliveryBox key={delivery.id} delivery={delivery} />
      ))}
    </div>
  );
};

export default DeliveriesPage;

import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import useDeliveriesPageLogics from "@/pages/mypage/deliveries/hooks/useDeliveriesPageLogics";
import DeliveryBox from "@/pages/mypage/deliveries/components/DeliveryBox";

const DeliveriesPage = () => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);
  const { deliveries, openAddDeliveryModal } = useDeliveriesPageLogics();

  console.log(deliveries);

  useEffect(() => {
    setHeaderProps({
      title: "배송지 관리",
      backRoute: "/mypage",
      hasConfirm: true,
      confirmText: "배송지 추가",
      onConfirm: openAddDeliveryModal,
    });
  }, [setHeaderProps, openAddDeliveryModal]);

  return (
    <div className="flex flex-col w-full h-full gap-4 p-4 overflow-y-scroll">
      {deliveries?.length === 0 && <div>등록된 배송지가 없습니다.</div>}

      {deliveries?.map((delivery) => (
        <DeliveryBox key={delivery.deliveryAddressId} delivery={delivery} />
      ))}
    </div>
  );
};

export default DeliveriesPage;

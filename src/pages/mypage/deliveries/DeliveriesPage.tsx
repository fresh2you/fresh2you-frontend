import useDeliveriesPageLogics from "@/pages/mypage/deliveries/hooks/useDeliveriesPageLogics";
import DeliveryBox from "@/pages/mypage/deliveries/components/DeliveryBox";
import useHeaderProps from "@/hooks/useHeaderProps";

const DeliveriesPage = () => {
  const { deliveries, openAddDeliveryModal } = useDeliveriesPageLogics();

  console.log(deliveries);

  useHeaderProps({
    title: "배송지 관리",
    backRoute: "/mypage",
    hasConfirm: true,
    confirmText: "배송지 추가",
    onConfirm: openAddDeliveryModal,
  });

  return (
    <div className="flex flex-col w-full h-full gap-4 py-4 overflow-y-scroll scrollbar-hide">
      {deliveries?.length === 0 && <div>등록된 배송지가 없습니다.</div>}

      {deliveries?.map((delivery) => (
        <DeliveryBox key={delivery.deliveryAddressId} delivery={delivery} />
      ))}
    </div>
  );
};

export default DeliveriesPage;

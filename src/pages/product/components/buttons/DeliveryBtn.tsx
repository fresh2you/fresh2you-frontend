import Button from "./Button";
import { overlay } from "overlay-kit";
import AddDeliveryModal from "@/pages/mypage/deliveries/components/AddDeliveryModal";

interface DeliveryButtonProps {
  className?: string;
}

const DeliveryButton: React.FC<DeliveryButtonProps> = ({ className }) => (
  <Button
    text="배송지 등록하기"
    onClick={() =>
      overlay.open(({ isOpen, unmount }) => <AddDeliveryModal isOpen={isOpen} unmount={unmount} />, {
        overlayId: "AddDeliveryModal",
      })
    }
    className={className || "mt-6 text-white bg-custom-green hover:bg-custom-green-hover"}
  />
);

export default DeliveryButton;

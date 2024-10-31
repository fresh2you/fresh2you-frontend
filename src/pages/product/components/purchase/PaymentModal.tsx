import Button from "../buttons/Button";
import TwoActionBtns from "../buttons/TwoActionBtns";

interface PaymentModalProps {
  unmount: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ unmount }) => {
  return (
    <div className="relative w-full h-screen">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div id="payment-method" className="relative rounded mobile:w-full">
          <TwoActionBtns
            primaryText="결제하기"
            secondaryText="닫기"
            secondaryOnClick={unmount}
            extraClassName="absolute z-40 bg-white w-full p-2 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};
export default PaymentModal;

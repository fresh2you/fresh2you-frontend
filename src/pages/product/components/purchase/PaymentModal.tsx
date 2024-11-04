import TwoActionBtns from "../buttons/TwoActionBtns";
import { handleRequestTossPayment } from "../../utils/handleTossPayments";
import useLoading from "../../hooks/useLoading";

interface PaymentModalProps {
  unmount: () => void;
  product: IProductList;
  quantity: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ unmount, product, quantity }) => {
  const isLoading = useLoading(1200);

  return (
    <div className="relative h-screen">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          id="payment-method"
          className="relative flex items-center justify-center rounded mobile:w-full mobile:px-4"
        >
          {!isLoading && (
            <TwoActionBtns
              primaryText="결제하기"
              primaryOnClick={() => handleRequestTossPayment({ product, quantity })}
              secondaryText="닫기"
              secondaryOnClick={unmount}
              extraClassName="absolute z-40 bg-white -bottom-9 w-[calc(100%-32px)] py-2"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default PaymentModal;

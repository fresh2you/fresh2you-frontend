import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import { toast } from "react-toastify";

const tossPayments = await loadTossPayments(import.meta.env.VITE_TOSS_PAYMENTS_CLIENT_KEY);
const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

export const handleRenderPayment = (
  recipientDetails: PurchaseFormDataType,
  setShowPaymentMethod: React.Dispatch<React.SetStateAction<boolean>>,
  totalAmount: number,
) => {
  const { recipientName, phoneNumber, address } = recipientDetails;
  if (!recipientName || !phoneNumber || !address) {
    toast.error("모든 필드를 입력해 주세요.");
    return;
  }
  widgets.setAmount({
    currency: "KRW",
    value: totalAmount,
  });

  widgets.renderPaymentMethods({
    selector: "#payment-method",
  });
  setShowPaymentMethod(true);
};

export const handleRequestTossPayment = () => {
  widgets.requestPayment({
    orderId: "0pnZP=Sqvr4k",
    orderName: "토스 티셔츠 외 2건",
    successUrl: "http://localhost:3000/purchase/complete",
    failUrl: window.location.origin,
  });
};

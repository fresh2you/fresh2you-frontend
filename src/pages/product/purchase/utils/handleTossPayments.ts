import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import { WidgetPaymentMethodWidget } from "@tosspayments/tosspayments-sdk";
import qs from "qs";

const tossPayments = await loadTossPayments(import.meta.env.VITE_TOSS_PAYMENTS_CLIENT_KEY);
const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

export const handleRenderPayment = async (
  setShowPaymentMethod: React.Dispatch<React.SetStateAction<boolean>>,
  totalAmount: number,
  paymentWidgetRef: React.MutableRefObject<WidgetPaymentMethodWidget | null>,
) => {
  setShowPaymentMethod(true);
  widgets.setAmount({
    currency: "KRW",
    value: totalAmount,
  });

  const response = await widgets.renderPaymentMethods({
    selector: "#payment-method",
  });

  if (paymentWidgetRef) paymentWidgetRef.current = response;
};

export const handleRequestTossPayment = ({ product, quantity }: { product: IProductList; quantity: number }) => {
  const queryString = qs.stringify({
    product: {
      ...product,
      quantity: quantity,
    },
  });
  widgets.requestPayment({
    orderId: "0pnZP=Sqvr4k", // test, 백엑드에게 응답받을 값 적용하기
    orderName: product.productName,
    successUrl: `${window.location.origin}/purchase/complete?${queryString}`,
    failUrl: window.location.origin,
  });
};
export const handleDestroyWidget = (paymentWidgetRef: React.MutableRefObject<WidgetPaymentMethodWidget | null>) => {
  if (paymentWidgetRef.current) {
    paymentWidgetRef.current.destroy();
    paymentWidgetRef.current = null;
  }
};

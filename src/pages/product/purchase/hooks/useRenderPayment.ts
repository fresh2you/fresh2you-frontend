import { useMutation } from "@tanstack/react-query";
import { handleRenderPayment } from "../utils/handleTossPayments";

export const useRenderPayment = (totalAmount: number) => {
  return useMutation(async (paymentWidgetRef: React.MutableRefObject<WidgetPaymentMethodWidget | null>) => {
    await handleRenderPayment(totalAmount, paymentWidgetRef); // handleRenderPayment 함수 호출
  });
};

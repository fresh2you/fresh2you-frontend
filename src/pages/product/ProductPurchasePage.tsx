import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PurchaseForm from "./components/purchase/PurchaseForm";
import { formatCurrency } from "../../utils/commonUtils";
import { useFetchProductById } from "./hooks/useFetchProductById";
import ProductSummary from "./components/purchase/ProductSummary";
import Loading from "../redirection/component/Loading";
import useHeaderProps from "@/hooks/useHeaderProps";
import { useAtomValue } from "jotai";
import { quantityAtom, recipientDetailsAtom } from "./atom/atom";
import { handleRenderPayment, handleDestroyWidget } from "./utils/handleTossPayments";
import useWindowResize from "./hooks/useWindowResize";
import { usePurchaseProductByPoint } from "./hooks/usePurchaseProductByPoint";
import { validatePurchaseData } from "./utils/purchaseHandlers";
import PaymentOptionBtns from "./components/buttons/PaymentOptionBtns";
import { useRef } from "react";
import { WidgetPaymentMethodWidget } from "@tosspayments/tosspayments-sdk";
import TwoActionBtns from "./components/buttons/TwoActionBtns";
import { handleRequestTossPayment } from "./utils/handleTossPayments";
import CurrentPointDisplay from "./components/purchase/CurrentPointDisplay";
import usePaymentMethodReady from "./hooks/usePaymentMethodReady";

const ProductPurchasePage = () => {
  const isDesktop = useWindowResize(1024);
  useHeaderProps({
    title: isDesktop ? "" : "상품 구매하기",
    backRoute: "../",
    hasConfirm: false,
    confirmText: null,
    onConfirm: null,
  });
  const { id: productId } = useParams();
  const quantity = useAtomValue(quantityAtom);
  const recipientDetails = useAtomValue(recipientDetailsAtom);
  const navigate = useNavigate();
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const { fetchedProductById: product, isLoading } = useFetchProductById();
  const { mutate: purchaseProduct } = usePurchaseProductByPoint();
  const paymentWidgetRef = useRef<WidgetPaymentMethodWidget | null>(null);
  const isPaymentMethodReady = usePaymentMethodReady(showPaymentMethod);

  if (isLoading || !product) return <Loading />;

  const totalAmount = product.price * quantity;

  return (
    <div
      className={`text-custom-black mobile:w-11/12 max-w-[600px] flex flex-col h-full pb-8 ${
        !isDesktop ? "pt-4" : "pt-2"
      }`}
    >
      {isDesktop && (
        <h1 className="mb-6 font-bold text-center text-custom-h2 text-custom-green">구매를 진행해볼까요?</h1>
      )}
      <ProductSummary product={product} />
      <PurchaseForm />
      <span className="mt-2 font-semibold text-center text-custom-p-lg">총 금액: {formatCurrency(totalAmount)} 원</span>
      <PaymentOptionBtns
        onPointPurchaseClick={() => {
          const isValid = validatePurchaseData(recipientDetails, quantity, product.quantity);
          if (isValid) purchaseProduct({ recipientDetails, quantity, productId, product, navigate });
        }}
        onGeneralPurchaseClick={() => {
          const isValid = validatePurchaseData(recipientDetails, quantity, product.quantity);
          if (isValid)
            handleRenderPayment(
              recipientDetails,
              setShowPaymentMethod,
              totalAmount,
              quantity,
              paymentWidgetRef,
              product.quantity,
            );
        }}
      />
      {showPaymentMethod && (
        <div id="payment-method" className="flex items-center justify-center h-full mt-4 rounded shadow-lg" />
      )}
      {isPaymentMethodReady && (
        <TwoActionBtns
          primaryText="결제하기"
          primaryOnClick={() => handleRequestTossPayment({ product, quantity })}
          secondaryText="닫기"
          secondaryOnClick={() => {
            setShowPaymentMethod(false);
            handleDestroyWidget(paymentWidgetRef);
          }}
          extraClassName="bg-transparent mt-2"
        />
      )}
      {!showPaymentMethod && <CurrentPointDisplay />}
    </div>
  );
};

export default ProductPurchasePage;

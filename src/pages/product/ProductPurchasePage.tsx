import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PurchaseForm from "./components/purchase/PurchaseForm";
import { formatCurrency } from "../../utils/commonUtils";
import { useFetchProductById } from "./hooks/useFetchProductById";
import ProductSummary from "./components/purchase/ProductSummary";
import { Loading } from "../redirection/component/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useHeaderProps from "@/hooks/useHeaderProps";
import { useAtomValue } from "jotai";
import { quantityAtom, recipientDetailsAtom } from "./atom/atom";
import { toggleModal } from "./utils/purchaseHandlers";
import { handleRenderPayment, handleDestroyWidget } from "./utils/handleTossPayments";
import useWindowResize from "./hooks/useWindowResize";
import PaymentModal from "./components/purchase/PaymentModal";
import { usePurchaseProductByPoint } from "./hooks/usePurchaseProductByPoint";
import { validatePurchaseData } from "./utils/purchaseHandlers";
import PaymentOptionBtns from "./components/buttons/PaymentOptionBtns";
import { useRef } from "react";
import { WidgetPaymentMethodWidget } from "@tosspayments/tosspayments-sdk";

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

  if (isLoading || !product) return <Loading isLayoutApplied={true} />;

  const totalAmount = product.price * quantity;

  return (
    <div
      className={`text-custom-black mobile:w-11/12 max-w-[600px] flex flex-col pb-6 h-screen ${
        !isDesktop ? "pt-2" : ""
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
          const isValid = validatePurchaseData(recipientDetails, quantity);
          if (isValid) purchaseProduct({ recipientDetails, quantity, productId, product, navigate });
        }}
        onGeneralPurchaseClick={() =>
          handleRenderPayment(recipientDetails, setShowPaymentMethod, totalAmount, quantity, paymentWidgetRef)
        }
      />
      <Link
        className="mt-5 font-semibold text-center underline text-custom-gray-dark text-custom-sm-pn hover:text-custom-green"
        to="/mypage/charge"
      >
        포인트 충전하러가기
      </Link>
      {showPaymentMethod && (
        <PaymentModal
          product={product}
          quantity={quantity}
          unmount={() => {
            handleDestroyWidget(paymentWidgetRef);
            toggleModal(setShowPaymentMethod);
          }}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductPurchasePage;

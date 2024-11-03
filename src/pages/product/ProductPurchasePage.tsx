import { useNavigate, useParams } from "react-router-dom";
import ProductSummary from "./components/purchase/ProductSummary";
import { formatCurrency } from "../../utils/commonUtils";
import { useFetchProductById } from "./hooks/useFetchProductById";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TwoActionBtns from "./components/buttons/TwoActionBtns";
import useHeaderProps from "@/hooks/useHeaderProps";
import { quantityAtom, recipientDetailsAtom } from "./atom/atom";
import { useAtomValue } from "jotai";
import PurchaseForm from "./components/purchase/PurchaseForm";
import { Loading } from "../redirection/component/Loading";
import { handleRenderPayment, handleRequestTossPayment } from "./utils/handleTossPayments";
import { useState } from "react";

const ProductPurchasePage = () => {
  useHeaderProps("", "../", false);
  const { id: productId } = useParams();
  const quantity = useAtomValue(quantityAtom);
  const recipientDetails = useAtomValue(recipientDetailsAtom);
  const navigate = useNavigate();
  const { fetchedProductById: product, isLoading } = useFetchProductById();

  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  const totalAmount = product ? product.price * quantity : 0;

  if (isLoading || !product) {
    return <Loading isLayoutApplied={true} />;
  }

  return (
    <div className="mobile:w-11/12 max-w-[600px] flex flex-col pb-6 h-screen">
      <h1 className="mb-6 font-bold text-center text-custom-h1 text-custom-green">구매를 진행해볼까요?</h1>
      <ProductSummary product={product} />
      <PurchaseForm />
      {showPaymentMethod ? (
        <>
          <div
            id="payment-method"
            className="px-6 pt-5 pb-0 mt-2 overflow-y-scroll bg-white border rounded shadow-lg border-custom-gray-light"
          >
            <h2 className="font-bold text-center text-custom-p text-custom-green">결제 방법을 선택해주세요</h2>
          </div>
          <span className="mt-4 font-semibold text-center text-custom-p-lg">
            총 금액: {formatCurrency(totalAmount)} 원
          </span>
          <TwoActionBtns
            primaryText="결제하기"
            primaryOnClick={() => handleRequestTossPayment()}
            secondaryText="취소"
            secondaryOnClick={() => setShowPaymentMethod(false)}
            extraClassName="mt-6"
          />
        </>
      ) : (
        <>
          <span className="my-4 font-semibold text-center text-custom-p-lg">
            총 금액: {formatCurrency(totalAmount)} 원
          </span>
          <TwoActionBtns
            primaryText="결제하기"
            primaryOnClick={() => handleRenderPayment(recipientDetails, setShowPaymentMethod, totalAmount, quantity)}
            secondaryText="취소"
            secondaryOnClick={() => navigate("/")}
            extraClassName="mb-8"
          />
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductPurchasePage;

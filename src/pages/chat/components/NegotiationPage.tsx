import ProductSummary from "@/pages/product/purchase/components/ProductSummary";
import PurchaseForm from "@/pages/product/purchase/components/PurchaseForm";
import { formatCurrency } from "@/utils/commonUtils";
import CurrentPointDisplay from "@/pages/product/purchase/components/CurrentPointDisplay";
import { useFetchProductById } from "@/pages/product/common/hooks/useFetchProductById";
import Loading from "@/pages/redirection/component/Loading";
import { useAtomValue } from "jotai";
import { quantityAtom, recipientDetailsAtom } from "@/pages/product/common/atom/atom";
import useWindowResize from "@/pages/product/common/hooks/useWindowResize";
import useHeaderProps from "@/hooks/useHeaderProps";
import Button from "@/pages/product/common/components/Button";
import { validatePurchaseData } from "@/pages/product/purchase/utils/purchaseHandlers";
import { usePurchaseProductByPoint } from "@/pages/product/purchase/hooks/usePurchaseProductByPoint";
import { useNavigate } from "react-router-dom";

const NegotiationPage: React.FC = () => {
  const isDesktop = useWindowResize(1024);
  useHeaderProps({
    title: isDesktop ? "" : "협상하기",
    backRoute: "../",
    hasConfirm: false,
  });
  const { fetchedProductById: product, isLoading } = useFetchProductById();
  const quantity = useAtomValue(quantityAtom);
  const recipientDetails = useAtomValue(recipientDetailsAtom);
  const { mutate: purchaseProduct } = usePurchaseProductByPoint();
  const navigate = useNavigate();
  if (isLoading || !product) return <Loading />;
  const deductedQuantity = quantity * 0.7;
  const totalAmount = Math.round(product.price * deductedQuantity);
  const productId = String(product.productId);

  return (
    <div
      className={`text-custom-black mobile:w-11/12 max-w-[600px] flex flex-col h-full pb-8 ${
        !isDesktop ? "pt-4" : "pt-2"
      }`}
    >
      {isDesktop && (
        <h1 className="mb-6 font-bold text-center text-custom-h2 text-custom-green">협상을 진행해볼까요?</h1>
      )}
      <ProductSummary product={product} />
      <PurchaseForm />
      <span className="mt-2 font-semibold text-center text-custom-p-lg">
        협상 금액: {formatCurrency(totalAmount)} 원
      </span>
      <Button
        type="submit"
        className="w-full max-w-[360px] self-center max-w- mt-3 text-white bg-custom-green hover:bg-custom-green-hover"
        text="포인트로 구매하기"
        aria-label="포인트로 구매하기"
        onClick={() => {
          const isValid = validatePurchaseData(recipientDetails, quantity, product.quantity, 10);
          if (isValid) purchaseProduct({ recipientDetails, quantity: deductedQuantity, productId, product, navigate });
        }}
      />
      <CurrentPointDisplay />
    </div>
  );
};

export default NegotiationPage;

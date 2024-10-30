import { useNavigate, useParams } from "react-router-dom";
import ProductSummary from "./components/purchase/ProductSummary";
import { formatCurrency } from "../../utils/commonUtils";
import { useFetchProductById } from "./hooks/useFetchProductById";
import { handlePurchase } from "./utils/productUtils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TwoActionBtns from "./components/buttons/TwoActionBtns";
import useHeaderProps from "@/hooks/useHeaderProps";
import { quantityAtom, recipientDetailsAtom } from "./atom/atom";
import { useAtomValue } from "jotai";
import PurchaseForm from "./components/purchase/PurchaseForm";
import { Loading } from "../redirection/component/Loading";

const ProductPurchasePage = () => {
  useHeaderProps("", "../", false);
  const { id: productId } = useParams();
  const quantity = useAtomValue(quantityAtom);
  const recipientDetails = useAtomValue(recipientDetailsAtom);
  const navigate = useNavigate();
  const { fetchedProductById: product, isLoading } = useFetchProductById();
  if (isLoading || !product) return <Loading isLayoutApplied={true} />;
  const totalAmount = product ? product.price * quantity : 0;

  return (
    <div className="mobile:w-11/12 max-w-[600px] flex flex-col">
      <h1 className="mb-6 font-bold text-center text-custom-h1 text-custom-green">구매를 진행해볼까요?</h1>
      <ProductSummary product={product} />
      <PurchaseForm />
      <span className="my-4 font-semibold text-center text-custom-p-lg">총 금액: {formatCurrency(totalAmount)} 원</span>
      <TwoActionBtns
        primaryText="결제하기"
        primaryOnClick={() => handlePurchase(recipientDetails, quantity, productId, navigate, product)}
        secondaryText="취소"
        secondaryOnClick={() => navigate("/")}
      />
      <ToastContainer />
    </div>
  );
};

export default ProductPurchasePage;

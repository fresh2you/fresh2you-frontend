import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./components/buttons/Button";
import ProductMiniInfo from "./components/purchase/ProductMiniInfo";
import PurchaseForm from "./components/purchase/PurchaseForm";
import { formatCurrency } from "../../utils/commonUtils";
import { useFetchProductById } from "./hooks/useFetchProductById";
import { handlePurchase } from "./utils/productUtils";
import { Loading } from "../redirection/component/Loading";
import useDefaultAddress from "./hooks/useDefaultAddress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";

const ProductPurchasePage = () => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    setHeaderProps({
      title: "",
      hasConfirm: false,
      backRoute: "../",
    });
  }, [setHeaderProps]);

  const { id: productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [recipientDetails, setRecipientDetails] = useState({
    recipientName: "",
    phoneNumber: "",
    addressId: "",
    address: "",
    detailedAddress: "",
    postalCode: "",
  });
  const [addressList, setAddressList] = useState([]);
  const navigate = useNavigate();

  const { fetchedProductById: product, isLoading } = useFetchProductById();

  useDefaultAddress(setRecipientDetails, setAddressList);

  if (isLoading || !product) return <Loading isLayoutApplied={true} />;

  const totalAmount = product.price * quantity;

  return (
    <div className="flex flex-col items-center w-full min-h-screen text-custom-black">
      <div
        className="mobile:w-11/12 tablet-sm:w-4/5 tablet-sm:min-w-[380px] mobile:max-w-[380px] tablet-sm:max-w-[450px]
      flex flex-col items-center tablet:min-w-[570px] tablet:max-w-[630px]"
      >
        <h1 className="font-bold text-center text-custom-h2 mobile:mb-6 text-custom-green tablet:mb-8">
          구매를 진행해볼까요?
        </h1>
        <div className="flex flex-col items-center w-full">
          <ProductMiniInfo product={product} quantity={quantity} setQuantity={setQuantity} />
          <PurchaseForm
            recipientDetails={recipientDetails}
            setRecipientDetails={setRecipientDetails}
            addressList={addressList}
          />
        </div>
        <div className="mt-6 font-semibold text-custom-h3">총금액: {formatCurrency(totalAmount)} 원</div>
        <div className="flex justify-center gap-4 mobile:mt-4 tablet-sm:mt-6">
          <Button
            className="text-white bg-custom-green hover:bg-custom-green-hover"
            text="결제하기"
            onClick={() => handlePurchase(recipientDetails, quantity, productId, navigate, product)}
          />
          <Button
            className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark"
            text="취소"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductPurchasePage;

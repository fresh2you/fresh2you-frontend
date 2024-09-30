import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./components/buttons/Button";
import ProductMiniInfo from "./components/purchase/ProductMiniInfo";
import PurchaseForm from "./components/purchase/PurchaseForm";
import { formatCurrency } from "../../utils/commonUtils";
import { useFetchProductById } from "./hooks/useFetchProductById";
import { handlePurchase } from "./utils/productUtils";
import { Loading } from "../redirection/component/Loading";
import ProductInfo from "./components/details/ProductInfo";
import useDefaultAddress from "./hooks/useDefaultAddress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPurchasePage = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [recipientDetails, setRecipientDetails] = useState({
    recipientName: "",
    phoneNumber: "",
    addressId: "",
    address: "",
    detailedAddress: "",
  });
  const [addressList, setAddressList] = useState([]);
  const navigate = useNavigate();

  useFetchProductById(productId, setLoading, setProduct);

  useDefaultAddress(setRecipientDetails, setAddressList);

  if (loading || !product) return <Loading isLayoutApplied={true} />;

  const totalAmount = product.price * quantity;

  return (
    <div className="flex flex-col items-center min-h-screen text-custom-black w-full px-4">
      <div
        className="mobile:w-11/12 tablet-sm:w-4/5 tablet-sm:min-w-[380px] mobile:max-w-[380px] tablet-sm:max-w-[450px]
      flex flex-col items-center tablet:min-w-[570px] tablet:max-w-[630px]"
      >
        <h1 className="text-custom-h2 font-bold mobile:mb-6 text-center text-custom-green tablet:mb-8">
          구매를 진행해볼까요?
        </h1>
        <div className="w-full flex flex-col items-center">
          <ProductMiniInfo product={product} quantity={quantity} setQuantity={setQuantity} />
          <PurchaseForm
            recipientDetails={recipientDetails}
            setRecipientDetails={setRecipientDetails}
            addressList={addressList}
          />
        </div>
        <div className="text-custom-h3 font-semibold mt-6">총금액: {formatCurrency(totalAmount)} 원</div>
        <div className="flex justify-center gap-4 mobile:mt-4 tablet-sm:mt-6">
          <Button
            className="bg-custom-green text-white hover:bg-custom-green-hover"
            text="결제하기"
            onClick={() => handlePurchase(recipientDetails, quantity, productId, setLoading, navigate, product)}
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

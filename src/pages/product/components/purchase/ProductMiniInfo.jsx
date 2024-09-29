import { formatCurrency } from "../../../../utils/commonUtils";
import { useNavigate } from "react-router-dom";
import PlusImg from "../..//../../assets/img/plus.png";
import MinusImg from "../../../../assets/img/minus.png";
import ProductInfo from "../details/ProductInfo";
import "../../../../styles/styles.css";
import QuantitySelector from "./QuantitySelector";
const ProductMiniInfo = ({ product, quantity, setQuantity }) => {
  const navigate = useNavigate();

  if (!product) {
    return <div className="text-center mt-20">No product data available.</div>;
  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  return (
    <div className="flex flex-col tablet:flex-row tablet:items-center w-full">
      <ProductInfo product={product} noBtn={true} />
      <div className="flex items-center gap-4 mobile:mt-4 tablet:mt-0 tablet:ml-2">
        <label htmlFor="quantity" className="text-custom-p font-semibold whitespace-nowrap">
          수량
        </label>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
};

export default ProductMiniInfo;

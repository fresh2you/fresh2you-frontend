import Button from "../buttons/Button";
import { formatCurrency } from "../../../../utils/commonUtils";
import { useNavigate } from "react-router-dom";
import ProductActionButtons from "../buttons/ProductActionButtons";
const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

const ProductInfo = ({ inChat = false, product, noBtn = false, className = "" }) => {
  const navigate = useNavigate();
  return (
    <div className={`flex items-center gap-x-4 ${className} relative`}>
      <div className="flex justify-center items-center w-1/3 mobile:min-w-[135px]">
        <img
          src={product.imageUrl || fallbackImg}
          alt={product.productName}
          className={`object-contain border rounded-md`}
        />
      </div>
      <div className="flex flex-col">
        <h3 className={`font-bold text-custom-h3 mb-1`}>{product.productName}</h3>
        <p className="text-custom-gray-dark text-custom-p">{product.sellerName}</p>
        <p className={`text-custom-green font-semibold text-custom-p`}>{formatCurrency(product.price)} 원</p>
        {!inChat && !noBtn && <ProductActionButtons product={product} navigate={navigate} />}
      </div>
      {inChat && !noBtn && (
        <Button
          className="bg-custom-green text-white hover:bg-custom-green-hover absolute left-0 bottom-0 opacity-85"
          text="구매하기"
          onClick={() => navigate(`/purchase/${product.productId}`)}
        />
      )}
    </div>
  );
};

export default ProductInfo;
